// POST /api/leads — capture, score, store, notify
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const RESEND_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL || 'leads@precisiontrading.com.au';

const PKG_LABELS = {
  launch:'Website Launch', local:'Local Presence', seo:'SEO Growth',
  leadgen:'Lead Generation', dominator:'Dominator'
};

function scoreLead(a){
  const {website_status:w, business_size:s, average_job_value:j, can_handle_more_enquiries:c, monthly_marketing_budget:b, main_goal:g} = a;
  let pkg='launch';
  if(b==='serious'&&(s==='large'||s==='medium')&&(j==='premium'||j==='high')) pkg='dominator';
  else if(b==='serious'&&g==='full') pkg='dominator';
  else if(c==='no_prof') pkg='launch';
  else if((b==='high'||b==='serious')&&(g==='leads'||g==='full')&&c!=='no_prof') pkg='leadgen';
  else if(g==='leads'&&(j==='high'||j==='premium')&&b!=='none'&&b!=='low'&&c!=='no_prof') pkg='leadgen';
  else if((b==='mid'||b==='high')&&(g==='google'||g==='full')) pkg='seo';
  else if(g==='google'&&(s==='medium'||s==='large')) pkg='seo';
  else if(w==='basic'||w==='good') pkg='local';
  else if(b==='low'&&g!=='leads') pkg='local';

  let temp='Warm';
  if((j==='premium')&&(b==='serious')&&(s==='large'||s==='medium')) temp='Premium';
  else if(g==='leads'&&c&&c.startsWith('yes')&&(j==='high'||j==='premium')&&(b==='high'||b==='serious')) temp='Hot';
  else if((b==='none'||b==='low')&&(j==='low')) temp='Cold';
  return {pkg, temp};
}

function validate(d){
  const req=['full_name','business_name','mobile_number','email_address','trade_type','website_status','average_job_value','main_goal'];
  for(const f of req){ if(!d[f]||!String(d[f]).trim()) return `Missing: ${f}`; }
  if(d._hp) return 'spam'; // honeypot
  if(!/^[^@]+@[^@]+\.[^@]+$/.test(d.email_address)) return 'Invalid email';
  if(/(https?:\/\/|www\.)/i.test(d.full_name+d.business_name)) return 'spam';
  return null;
}

exports.handler = async (event) => {
  if(event.httpMethod!=='POST') return {statusCode:405, body:'Method not allowed'};
  let d;
  try{ d=JSON.parse(event.body); }catch{ return {statusCode:400, body:JSON.stringify({error:'Bad JSON'})}; }

  const err=validate(d);
  if(err){ return {statusCode: err==='spam'?200:400, body:JSON.stringify({ok:err==='spam', error:err})}; }

  const {pkg, temp} = scoreLead(d);
  const ip = event.headers['x-forwarded-for']||event.headers['client-ip']||'';

  const row = {
    full_name:d.full_name, business_name:d.business_name, mobile_number:d.mobile_number,
    email_address:d.email_address, trade_type:d.trade_type, website_status:d.website_status,
    business_size:d.business_size, average_job_value:d.average_job_value,
    current_lead_source:d.current_lead_source, can_handle_more_enquiries:d.can_handle_more_enquiries,
    monthly_marketing_budget:d.monthly_marketing_budget, main_goal:d.main_goal,
    professional_business_email_status:d.professional_business_email_status,
    website_url:d.website_url, google_business_profile_url:d.google_business_profile_url,
    recommended_package:PKG_LABELS[pkg], lead_temperature:temp, status:'New Lead',
    utm_source:d.utm_source, utm_medium:d.utm_medium, utm_campaign:d.utm_campaign,
    utm_content:d.utm_content, utm_term:d.utm_term, landing_page_url:d.landing_page_url,
    referrer:d.referrer, user_agent:event.headers['user-agent']||'', ip_address:ip
  };

  // Store in Supabase
  try{
    const r=await fetch(`${SUPABASE_URL}/rest/v1/pp_leads`,{
      method:'POST',
      headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify(row)
    });
    if(!r.ok){ const t=await r.text(); console.error('Supabase error:',t); }
  }catch(e){ console.error('DB error:',e); }

  // Notify owner
  if(RESEND_KEY && NOTIFY_EMAIL){
    const first=(d.full_name||'').split(' ')[0];
    const summary=`Recommended: ${PKG_LABELS[pkg]} (${temp} lead). ${d.business_name} — ${d.trade_type}, ${d.average_job_value} avg job, ${d.monthly_marketing_budget} budget, wants ${d.main_goal}.`;
    const ownerBody=`
<h2>New Precision Pipeline Lead</h2>
<p><strong>${summary}</strong></p>
<table cellpadding="6" style="font-family:sans-serif;font-size:14px">
<tr><td><b>Name</b></td><td>${d.full_name}</td></tr>
<tr><td><b>Business</b></td><td>${d.business_name}</td></tr>
<tr><td><b>Phone</b></td><td>${d.mobile_number}</td></tr>
<tr><td><b>Email</b></td><td>${d.email_address}</td></tr>
<tr><td><b>Trade</b></td><td>${d.trade_type}</td></tr>
<tr><td><b>Website</b></td><td>${d.website_status} ${d.website_url||''}</td></tr>
<tr><td><b>Business Size</b></td><td>${d.business_size||''}</td></tr>
<tr><td><b>Avg Job Value</b></td><td>${d.average_job_value}</td></tr>
<tr><td><b>Lead Source</b></td><td>${d.current_lead_source||''}</td></tr>
<tr><td><b>Capacity</b></td><td>${d.can_handle_more_enquiries||''}</td></tr>
<tr><td><b>Budget</b></td><td>${d.monthly_marketing_budget||''}</td></tr>
<tr><td><b>Goal</b></td><td>${d.main_goal}</td></tr>
<tr><td><b>Biz Email</b></td><td>${d.professional_business_email_status||''}</td></tr>
<tr><td><b>GBP</b></td><td>${d.google_business_profile_url||''}</td></tr>
<tr><td><b>Recommended</b></td><td>${PKG_LABELS[pkg]}</td></tr>
<tr><td><b>Temperature</b></td><td>${temp}</td></tr>
<tr><td><b>UTM Source</b></td><td>${d.utm_source||'direct'}</td></tr>
<tr><td><b>UTM Campaign</b></td><td>${d.utm_campaign||'-'}</td></tr>
<tr><td><b>Referrer</b></td><td>${d.referrer||'-'}</td></tr>
</table>`;
    try{
      await fetch('https://api.resend.com/emails',{
        method:'POST',
        headers:{'Authorization':`Bearer ${RESEND_KEY}`,'Content-Type':'application/json'},
        body:JSON.stringify({from:FROM_EMAIL, to:NOTIFY_EMAIL, subject:`New Lead: ${d.business_name} — ${PKG_LABELS[pkg]} (${temp})`, html:ownerBody})
      });
    }catch(e){ console.error('Owner email error:',e); }

    // Confirmation to lead
    try{
      await fetch('https://api.resend.com/emails',{
        method:'POST',
        headers:{'Authorization':`Bearer ${RESEND_KEY}`,'Content-Type':'application/json'},
        body:JSON.stringify({from:FROM_EMAIL, to:d.email_address, subject:'Your Precision Pipeline Review Has Been Received',
          html:`<div style="font-family:sans-serif;font-size:15px;line-height:1.6"><p>Hi ${first},</p><p>Thanks for completing the Precision Pipeline review.</p><p>We'll review your answers and send back a recommended setup, website/marketing direction and pricing options.</p><p>No pressure — just a clear recommendation based on where your business is now and what you're trying to improve.</p><p><strong>Precision Pipeline</strong><br>Websites. Marketing. Leads.</p></div>`})
      });
    }catch(e){ console.error('Confirm email error:',e); }
  }

  return {statusCode:200, body:JSON.stringify({ok:true, package:PKG_LABELS[pkg], temperature:temp})};
};

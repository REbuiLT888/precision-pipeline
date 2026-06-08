// GET /api/admin-leads — list leads (password protected)
// POST /api/admin-leads — update lead status/notes
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const ADMIN_SECRET = process.env.ADMIN_SECRET;

exports.handler = async (event) => {
  const auth = event.headers['authorization']||event.headers['Authorization']||'';
  if(auth !== `Bearer ${ADMIN_SECRET}`){
    return {statusCode:401, body:JSON.stringify({error:'Unauthorized'})};
  }

  if(event.httpMethod==='GET'){
    try{
      const r=await fetch(`${SUPABASE_URL}/rest/v1/pp_leads?select=*&order=created_at.desc`,{
        headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`}
      });
      const data=await r.json();
      return {statusCode:200, body:JSON.stringify(data)};
    }catch(e){ return {statusCode:500, body:JSON.stringify({error:String(e)})}; }
  }

  if(event.httpMethod==='POST'){
    let d; try{ d=JSON.parse(event.body); }catch{ return {statusCode:400,body:'bad json'}; }
    const {id, ...updates} = d;
    updates.updated_at = new Date().toISOString();
    try{
      const r=await fetch(`${SUPABASE_URL}/rest/v1/pp_leads?id=eq.${id}`,{
        method:'PATCH',
        headers:{'apikey':SUPABASE_KEY,'Authorization':`Bearer ${SUPABASE_KEY}`,'Content-Type':'application/json','Prefer':'return=minimal'},
        body:JSON.stringify(updates)
      });
      return {statusCode: r.ok?200:500, body:JSON.stringify({ok:r.ok})};
    }catch(e){ return {statusCode:500, body:JSON.stringify({error:String(e)})}; }
  }

  return {statusCode:405, body:'Method not allowed'};
};

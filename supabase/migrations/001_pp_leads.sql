-- Precision Pipeline leads table
-- Run in Supabase SQL editor (project: nsggodkhuycgorjqjvzi)

create table if not exists pp_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  -- contact
  full_name text not null,
  business_name text not null,
  mobile_number text not null,
  email_address text not null,
  -- funnel answers
  trade_type text,
  website_status text,
  business_size text,
  average_job_value text,
  current_lead_source text,
  can_handle_more_enquiries text,
  monthly_marketing_budget text,
  main_goal text,
  professional_business_email_status text,
  website_url text,
  google_business_profile_url text,
  -- scoring
  recommended_package text,
  lead_temperature text,
  -- pipeline
  status text default 'New Lead',
  notes text,
  -- tracking
  utm_source text, utm_medium text, utm_campaign text, utm_content text, utm_term text,
  landing_page_url text, referrer text, user_agent text, ip_address text
);

create index if not exists idx_pp_leads_status on pp_leads(status);
create index if not exists idx_pp_leads_created on pp_leads(created_at desc);
create index if not exists idx_pp_leads_temp on pp_leads(lead_temperature);

-- RLS: only service role writes (via function). Admin reads via service key.
alter table pp_leads enable row level security;
drop policy if exists service_all on pp_leads;
create policy service_all on pp_leads for all using (true) with check (true);

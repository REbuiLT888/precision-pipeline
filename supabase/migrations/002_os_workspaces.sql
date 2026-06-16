-- Precision OS core schema
-- Run in Supabase SQL editor for the OS project (rvoqbrsvnpyqbphipgvs)

create table if not exists os_workspaces (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  name text not null,
  owner_id uuid not null references auth.users(id) on delete cascade,
  industry text
);

create index if not exists idx_os_workspaces_owner on os_workspaces(owner_id);

-- RLS: service role only (all reads/writes go through API functions with service key)
alter table os_workspaces enable row level security;
drop policy if exists service_all on os_workspaces;
create policy service_all on os_workspaces for all using (true) with check (true);

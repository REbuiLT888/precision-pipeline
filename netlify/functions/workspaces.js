// GET  /api/workspaces — list workspaces for the authenticated user
// POST /api/workspaces — create a new workspace
const SUPABASE_URL = process.env.OS_SUPABASE_URL;
const SERVICE_KEY = process.env.OS_SUPABASE_SERVICE_KEY;

async function getUserFromToken(token) {
  const r = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${token}` },
  });
  if (!r.ok) return null;
  return r.json();
}

exports.handler = async (event) => {
  const auth = event.headers['authorization'] || event.headers['Authorization'] || '';
  if (!auth.startsWith('Bearer ')) return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  const token = auth.slice(7);

  const user = await getUserFromToken(token);
  if (!user?.id) return { statusCode: 401, body: JSON.stringify({ error: 'Invalid or expired token' }) };

  if (event.httpMethod === 'GET') {
    try {
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/os_workspaces?owner_id=eq.${user.id}&select=*&order=created_at.asc`,
        { headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}` } }
      );
      const rows = await r.json();
      const workspaces = Array.isArray(rows) ? rows.map(w => ({ ...w, role: 'owner' })) : [];
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(workspaces) };
    } catch (e) {
      return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
    }
  }

  if (event.httpMethod === 'POST') {
    let body;
    try { body = JSON.parse(event.body); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Bad JSON' }) }; }
    const { name, industry } = body;
    if (!name) return { statusCode: 400, body: JSON.stringify({ error: 'Workspace name is required' }) };
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/os_workspaces`, {
        method: 'POST',
        headers: {
          'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}`,
          'Content-Type': 'application/json', 'Prefer': 'return=representation',
        },
        body: JSON.stringify({ name, owner_id: user.id, industry: industry || null }),
      });
      const row = await r.json();
      const workspace = Array.isArray(row) ? { ...row[0], role: 'owner' } : { ...row, role: 'owner' };
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(workspace) };
    } catch (e) {
      return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
    }
  }

  return { statusCode: 405, body: 'Method not allowed' };
};

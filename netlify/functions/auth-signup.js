// POST /api/auth/signup — Supabase signup + create first workspace
const SUPABASE_URL = process.env.OS_SUPABASE_URL;
const ANON_KEY = process.env.OS_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.OS_SUPABASE_SERVICE_KEY;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  let body;
  try { body = JSON.parse(event.body); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Bad JSON' }) }; }

  const { email, password, workspace_name, industry } = body;
  if (!email || !password || !workspace_name) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email, password and workspace name are required' }) };
  }

  try {
    // 1. Sign up with Supabase Auth
    const r = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, data: { workspace_name, industry: industry || null } }),
    });
    const data = await r.json();
    if (!r.ok) {
      const msg = data.error_description || data.message || data.msg || 'Signup failed';
      return { statusCode: 400, body: JSON.stringify({ error: msg }) };
    }

    // 2. Create the first workspace if we have a confirmed session
    const userId = data.user?.id;
    const accessToken = data.access_token || data.session?.access_token;
    if (userId && accessToken) {
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/os_workspaces`, {
          method: 'POST',
          headers: {
            'apikey': SERVICE_KEY,
            'Authorization': `Bearer ${SERVICE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({ name: workspace_name, owner_id: userId, industry: industry || null }),
        });
      } catch (e) {
        console.error('Workspace creation error:', e);
      }
    }

    // 3. If email confirmation is pending, Supabase returns session: null
    //    Return a friendly message so the client can handle it
    if (!accessToken) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _pending_confirmation: true }),
      };
    }

    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};

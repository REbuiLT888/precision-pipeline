// POST /api/auth/login — Supabase email/password sign-in
const SUPABASE_URL = process.env.OS_SUPABASE_URL;
const ANON_KEY = process.env.OS_SUPABASE_ANON_KEY;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  let body;
  try { body = JSON.parse(event.body); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Bad JSON' }) }; }

  const { email, password } = body;
  if (!email || !password) return { statusCode: 400, body: JSON.stringify({ error: 'Email and password are required' }) };

  try {
    const r = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'apikey': ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await r.json();
    if (!r.ok) {
      const msg = data.error_description || data.message || data.msg || 'Login failed';
      return { statusCode: 401, body: JSON.stringify({ error: msg }) };
    }
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};

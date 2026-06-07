// =============================================
// Cloudflare Worker — Pl@ntNet proxy
// =============================================
// Risolve il blocco CORS di Pl@ntNet permettendo alla PWA "Citizen Science Explorer"
// di chiamare l'API dal browser. Nasconde la chiave API lato server.
//
// ---- DEPLOY (5 minuti, gratis) ----
// 1. Crea un account su https://dash.cloudflare.com/ (gratis).
// 2. Workers & Pages → Create Worker → "Create Worker" → dagli un nome (es. plantnet-proxy).
// 3. "Edit code" → cancella tutto e incolla questo file → Deploy.
// 4. Settings → Variables → Environment Variables → "Add variable":
//      Name:  PLANTNET_KEY
//      Value: 2b10dUMoc2mZ3u2eBt9iPLKe
//      [x] Encrypt
//    → Deploy.
// 5. (Opzionale ma consigliato) Settings → Variables → "Add variable":
//      Name:  ALLOWED_ORIGINS
//      Value: https://tuo-dominio.it,http://localhost:8090
//    (lista di domini autorizzati separati da virgola; default "*" = qualsiasi origine)
// 6. Copia l'URL del worker (es. https://plantnet-proxy.tuonome.workers.dev)
//    e incollalo in index.html nella costante PLANTNET_PROXY_URL.
//
// Free tier: 100.000 richieste/giorno (Pl@ntNet ne dà 500/giorno, quindi è coperto x200).

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '*').split(',').map(s => s.trim());
    const allowOrigin = allowed.includes('*') ? '*' : (allowed.includes(origin) ? origin : '');
    const corsHeaders = {
      'Access-Control-Allow-Origin': allowOrigin || allowed[0] || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, corsHeaders);
    }
    if (!env.PLANTNET_KEY) {
      return json({ error: 'missing_server_key' }, 500, corsHeaders);
    }
    if (allowOrigin === '' && origin) {
      return json({ error: 'origin_not_allowed' }, 403, corsHeaders);
    }

    const incomingUrl = new URL(request.url);
    const search = new URLSearchParams(incomingUrl.search);
    search.set('api-key', env.PLANTNET_KEY);
    const targetUrl = 'https://my-api.plantnet.org/v2/identify/all?' + search.toString();

    try {
      const upstream = await fetch(targetUrl, {
        method: 'POST',
        body: request.body,
        headers: { 'Content-Type': request.headers.get('Content-Type') || 'multipart/form-data' },
      });
      const body = await upstream.arrayBuffer();
      const headers = new Headers(corsHeaders);
      headers.set('Content-Type', upstream.headers.get('Content-Type') || 'application/json');
      return new Response(body, { status: upstream.status, headers });
    } catch (err) {
      return json({ error: 'upstream_failure', detail: String(err) }, 502, corsHeaders);
    }
  },
};

function json(obj, status, extraHeaders) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

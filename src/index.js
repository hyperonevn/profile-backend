import { renderTemplate } from './templates/renderTemplate.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const subdomain = url.hostname.split('.')[0];

    if (subdomain === 'profile' || subdomain === 'www') {
      return new Response(`<h1>Welcome to Profile.io.vn</h1>`, {
        headers: { 'content-type': 'text/html; charset=utf-8' },
      });
    }

    const result = await env.DB.prepare(
      'SELECT * FROM profiles WHERE subdomain = ?'
    ).bind(subdomain).first();

    if (!result) {
      return new Response(`<h1>Không tìm thấy hồ sơ ${subdomain}</h1>`, {
        headers: { 'content-type': 'text/html; charset=utf-8' },
        status: 404,
      });
    }

    const html = renderTemplate(result);
    return new Response(html, {
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  },
};

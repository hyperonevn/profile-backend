export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostParts = url.hostname.split('.');
    const subdomain = hostParts[0];

    if (subdomain === 'profile' || subdomain === 'www') {
      return new Response(`
        <html>
          <head><title>Hyper Profile</title></head>
          <body style="font-family:sans-serif;text-align:center;padding:60px">
            <h1>Welcome to Profile.io.vn</h1>
            <p>Hệ thống hồ sơ cá nhân động của Hyper One</p>
            <p>Thử truy cập: <a href="https://luminhtri.profile.io.vn">https://luminhtri.profile.io.vn</a></p>
          </body>
        </html>
      `, { headers: { 'content-type': 'text/html; charset=utf-8' } });
    }

    const result = await env.DB.prepare(
      "SELECT * FROM profiles WHERE subdomain = ?"
    ).bind(subdomain).first();

    if (!result) {
      return new Response(`<h1>Không tìm thấy hồ sơ cho ${subdomain}</h1>`, {
        headers: { 'content-type': 'text/html; charset=utf-8' },
        status: 404,
      });
    }

    return new Response(`
      <html lang="vi">
        <head>
          <meta charset="utf-8" />
          <title>${result.name} | ${result.title}</title>
          <meta name="description" content="${result.bio}" />
        </head>
        <body style="font-family:sans-serif;text-align:center;padding:50px">
          <img src="${result.avatar_url}" alt="${result.name}" width="120" style="border-radius:50%" />
          <h1>${result.name}</h1>
          <h3>${result.title}</h3>
          <p>${result.bio}</p>
          <p><a href="${result.link}" target="_blank">🔗 Xem thêm</a></p>
        </body>
      </html>
    `, { headers: { 'content-type': 'text/html; charset=utf-8' } });
  }
}

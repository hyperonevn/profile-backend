// /profile-backend/templates/renderTemplate.js
export function renderTemplate(profile) {
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>${profile.name} | ${profile.title}</title>
    <meta name="description" content="${profile.bio}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background: radial-gradient(circle at top, #111 0%, #000 100%);
        color: white;
        text-align: center;
        margin: 0;
        padding: 40px 0;
      }
      .phone {
        position: relative;
        width: 260px;
        height: 530px;
        margin: 0 auto;
        background: #111;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(0,0,0,0.5);
      }
      .cover {
        position: absolute;
        inset: 0;
        background-image: url('${profile.cover || "https://hyperone.vn/bg.jpg"}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.6);
      }
      .content {
        position: relative;
        z-index: 10;
        padding: 30px 15px;
      }
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 3px solid #fff;
        margin: 10px auto;
        object-fit: cover;
        box-shadow: 0 0 10px rgba(255,255,255,0.3);
      }
      h1 {
        font-size: 18px;
        margin: 5px 0 0 0;
        font-weight: 700;
      }
      h2 {
        font-size: 11px;
        font-weight: 500;
        color: #ddd;
        margin: 3px 0;
      }
      .intro {
        font-size: 10px;
        color: #ccc;
        font-style: italic;
        margin: 10px auto;
        max-width: 200px;
        line-height: 1.3;
      }
      a.link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 6px auto;
        width: 200px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(255,255,255,0.1);
        color: white;
        font-size: 10px;
        text-decoration: none;
        transition: 0.3s;
      }
      a.link:hover { background: rgba(255,255,255,0.2); }
      .socials {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 10px;
      }
      .socials img {
        width: 18px;
        filter: brightness(1);
        transition: 0.3s;
      }
      .socials img:hover { transform: scale(1.2); }
      .qr {
        margin-top: 10px;
      }
      footer {
        font-size: 9px;
        color: #999;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="phone">
      <div class="cover"></div>
      <div class="content">
        <img src="${profile.avatar_url}" alt="${profile.name}" class="avatar" />
        <h1>${profile.name}</h1>
        <h2>${profile.title}</h2>
        <p class="intro">“${profile.bio}”</p>

        <a href="https://${profile.subdomain}.profile.io.vn" target="_blank" class="link">🌐 ${profile.subdomain}.profile.io.vn</a>
        <a href="mailto:${profile.socials?.email || ''}" class="link">✉️ ${profile.socials?.email || 'Email không có'}</a>
        <a href="tel:${profile.phone || ''}" class="link">📞 ${profile.phone || '---'}</a>

        <div class="socials">
          ${profile.socials?.facebook ? `<a href="${profile.socials.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"/></a>` : ''}
          ${profile.socials?.zalo ? `<a href="https://zalo.me/${profile.socials.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"/></a>` : ''}
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=https://${profile.subdomain}.profile.io.vn" alt="QR" />
          <p style="font-size:10px;color:#aaa">Quét để xem hồ sơ</p>
        </div>

        <footer>
          <p>${profile.location || 'Việt Nam'}</p>
          <p>© 2025 HYPER ME</p>
        </footer>
      </div>
    </div>
  </body>
  </html>`;
}

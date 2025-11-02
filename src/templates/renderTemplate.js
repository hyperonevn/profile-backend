// /profile-backend/templates/renderTemplate.js
export function renderTemplate(profile = {}, env = {}) {
  const socials = profile.socials || {};
  const languages = Array.isArray(profile.language) && profile.language.length
    ? profile.language.join(", ")
    : "";

  // CDN động, không hardcode
  const CDN = env.CDN_BASE || "";
  const avatarUrl = profile.image || (CDN && profile.subdomain ? `${CDN}/users/${profile.subdomain}/avatar.jpg` : "");
  const coverUrl = profile.cover || (CDN && profile.subdomain ? `${CDN}/users/${profile.subdomain}/cover.jpg` : "");

  return `<!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>${profile.full_name || "Hồ sơ cá nhân"} | ${profile.position || ""}</title>
    <meta name="description" content="${profile.intro || ""}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(180deg, #0d0d0f 0%, #050506 100%);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: hidden;
      }

      .phone {
        position: relative;
        width: 300px;
        height: 580px;
        background: #111;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(0,0,0,0.6);
      }

      .cover {
        position: absolute;
        inset: 0;
        background-image: url('${coverUrl}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.55);
      }

      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.9) 90%);
      }

      .content {
        position: relative;
        z-index: 2;
        height: 100%;
        padding: 18px 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .top {
        text-align: center;
      }

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 3px solid #fff;
        object-fit: cover;
        box-shadow: 0 0 15px rgba(255,255,255,0.3);
        margin-bottom: 10px;
      }

      h1 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
      }

      .sub {
        font-size: 12px;
        color: #ddd;
        margin-bottom: 2px;
      }

      .company {
        font-size: 12px;
        color: #ff72c6;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .roles {
        font-size: 11px;
        color: #aaa;
        margin-bottom: 6px;
        line-height: 1.3;
      }

      .intro {
        font-size: 11px;
        color: #ccc;
        font-style: italic;
        margin: 8px auto;
        max-width: 220px;
        line-height: 1.4;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 6px;
        width: 100%;
        align-items: center;
      }

      a.link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 220px;
        padding: 7px;
        border-radius: 999px;
        background: rgba(255,255,255,0.12);
        color: white;
        font-size: 11px;
        text-decoration: none;
        transition: 0.25s;
      }

      a.link:hover { background: rgba(255,255,255,0.25); }

      .socials {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 10px 0;
      }

      .socials img {
        width: 18px;
        height: 18px;
        opacity: 0.85;
        transition: 0.25s;
      }

      .socials img:hover { transform: scale(1.1); opacity: 1; }

      /* ✅ QR code nằm giữa tuyệt đối */
      .qr {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .qr img {
        width: 130px;
        height: 130px;
        border-radius: 10px;
        background: white;
        padding: 7px;
        box-shadow: 0 0 10px rgba(255,255,255,0.25);
      }

      footer {
        font-size: 10px;
        color: #aaa;
        text-align: center;
        line-height: 1.4;
        margin-top: 8px;
      }

      /* ✅ Responsive mobile */
      @media (max-width: 480px) {
        body {
          background: #000;
          height: auto;
          min-height: 100vh;
          padding: 20px 0;
        }

        .phone {
          width: 90vw;
          height: auto;
          border-radius: 1.2rem;
        }

        .avatar {
          width: 80px;
          height: 80px;
        }

        h1 {
          font-size: 16px;
        }

        a.link {
          width: 85%;
          font-size: 12px;
        }

        .qr img {
          width: 140px;
          height: 140px;
        }
      }
    </style>
  </head>
  <body>
    <div class="phone">
      <div class="cover"></div>
      <div class="overlay"></div>
      <div class="content">
        <div class="top">
          ${avatarUrl ? `<img src="${avatarUrl}" alt="${profile.full_name || ""}" class="avatar" />` : ""}
          <h1>${profile.full_name || ""}</h1>
          <p class="sub">${profile.position || ""}</p>
          <p class="company">${profile.company_bold || ""}</p>
          <p class="roles">${profile.roles || ""}</p>
          ${profile.intro ? `<p class="intro">“${profile.intro}”</p>` : ""}
        </div>

        <div class="links">
          ${profile.domain ? `<a href="https://${profile.domain}" target="_blank" class="link">🌐 ${profile.domain}</a>` : ""}
          ${socials.email ? `<a href="mailto:${socials.email}" class="link">✉️ ${socials.email}</a>` : ""}
          ${profile.phone ? `<a href="tel:${profile.phone}" class="link">📞 ${profile.phone}</a>` : ""}
        </div>

        <div class="socials">
          ${socials.facebook ? `<a href="${socials.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"/></a>` : ""}
          ${socials.zalo ? `<a href="https://zalo.me/${socials.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo"/></a>` : ""}
        </div>

        <div class="qr">
          ${profile.domain ? `<img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://${profile.domain}" alt="QR Code" />` : ""}
          <p style="font-size:10px;color:#aaa;margin-top:5px;">Quét để xem hồ sơ</p>
        </div>

        <footer>
          ${profile.location ? `<p>${profile.location}</p>` : ""}
          ${languages ? `<p>Ngôn ngữ: ${languages}</p>` : ""}
          <p>© 2025 HYPER ME</p>
        </footer>
      </div>
    </div>
  </body>
  </html>`;
}

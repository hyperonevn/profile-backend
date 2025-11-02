// /profile-backend/templates/renderTemplate.js
export function renderTemplate(profile = {}) {
  const socials = profile.socials || {};
  const languages = Array.isArray(profile.language) && profile.language.length
    ? profile.language.join(", ")
    : "";

  return `<!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name || profile.name || "Hồ sơ cá nhân"} | ${profile.position || ""}</title>
    <meta name="description" content="${profile.intro || ""}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(180deg, #0d0d0f 0%, #050506 100%);
        color: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .phone {
        position: relative;
        width: 270px;
        height: 550px;
        background: #111;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(0,0,0,0.6);
      }
      .cover {
        position: absolute;
        inset: 0;
        background-image: url('${profile.cover || ""}');
        background-size: cover;
        background-position: center;
        filter: brightness(0.55);
      }
      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.9) 85%);
      }
      .content {
        position: relative;
        z-index: 2;
        padding: 22px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-between;
      }
      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .avatar {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        border: 3px solid #fff;
        object-fit: cover;
        box-shadow: 0 0 15px rgba(255,255,255,0.25);
        margin-bottom: 8px;
      }
      h1 {
        font-size: 17px;
        font-weight: 700;
        margin-bottom: 3px;
      }
      .sub {
        font-size: 11px;
        font-weight: 500;
        color: #ddd;
        margin-bottom: 2px;
      }
      .company {
        font-size: 11px;
        color: #ff72c6;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .roles {
        font-size: 10px;
        color: #aaa;
        margin-bottom: 6px;
      }
      .intro {
        font-size: 10px;
        color: #ccc;
        font-style: italic;
        margin: 8px 0;
        max-width: 200px;
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
        gap: 18px;
        margin: 10px 0;
      }
      .socials img {
        width: 16px;
        height: 16px;
        opacity: 0.85;
        transition: 0.3s;
      }
      .socials img:hover { transform: scale(1.15); opacity: 1; }
      .qr {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
      }
      .qr img {
        width: 90px;
        height: 90px;
        border-radius: 8px;
        background: white;
        padding: 5px;
        box-shadow: 0 0 8px rgba(255,255,255,0.2);
      }
      footer {
        font-size: 9px;
        color: #999;
        text-align: center;
        line-height: 1.3;
        margin-top: 8px;
      }
    </style>
  </head>
  <body>
    <div class="phone">
      <div class="cover"></div>
      <div class="overlay"></div>
      <div class="content">
        <div class="top">
          <img src="${profile.image || ""}" alt="${profile.full_name || ""}" class="avatar" />
          <h1>${profile.full_name || ""}</h1>
          <p class="sub">${profile.position || ""}</p>
          <p class="company">${profile.company_bold || ""}</p>
          <p class="roles">${profile.roles || ""}</p>
          ${profile.intro ? `<p class="intro">“${profile.intro}”</p>` : ""}
        </div>

        <div class="middle">
          <div class="links">
            ${profile.domain ? `<a href="https://${profile.domain}" target="_blank" class="link">🌐 ${profile.domain}</a>` : ""}
            ${socials.email ? `<a href="mailto:${socials.email}" class="link">✉️ ${socials.email}</a>` : ""}
            ${profile.phone ? `<a href="tel:${profile.phone}" class="link">📞 ${profile.phone}</a>` : ""}
          </div>
          <div class="socials">
            ${socials.facebook ? `<a href="${socials.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"/></a>` : ""}
            ${socials.zalo ? `<a href="https://zalo.me/${socials.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo"/></a>` : ""}
          </div>
        </div>

        <div class="qr">
          ${profile.domain ? `<img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://${profile.domain}" alt="QR Code" />` : ""}
          <p style="font-size:9px;color:#aaa;margin-top:5px;">Quét để xem hồ sơ</p>
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

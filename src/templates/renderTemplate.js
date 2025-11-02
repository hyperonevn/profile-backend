// /profile-backend/templates/renderTemplate.js
export function renderTemplate(profile = {}, env = {}) {
  // ✅ 1. Chuyển toàn bộ key IN HOA → chữ thường (D1 luôn trả uppercase)
  const normalized = {};
  for (const key in profile) normalized[key.toLowerCase()] = profile[key];
  profile = normalized;

  // ✅ 2. Xử lý danh sách ngôn ngữ (JSON string → array)
  const langs =
    typeof profile.languages === "string"
      ? JSON.parse(profile.languages)
      : Array.isArray(profile.languages)
      ? profile.languages
      : [];
  const languages = langs.length ? `🌐 ${langs.join(", ")}` : "";

  // ✅ 3. Thiết lập CDN & avatar / cover fallback
  const CDN = env.CDN_BASE || "";
  const avatarUrl = profile.avatar_path
    ? `${CDN}/${profile.avatar_path}`
    : `${CDN}/${profile.subdomain}/avatar.jpg`;
  const coverUrl = profile.cover_path
    ? `${CDN}/${profile.cover_path}`
    : `${CDN}/${profile.subdomain}/cover.jpg`;

  // ✅ 4. HTML render chính
  return `<!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>${profile.full_name || "Card Visit"} | ${profile.full_name || ""}</title>
    <meta name="description" content="${profile.bio_short || ""}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: #000;
        color: white;
        min-height: 100vh;
        background-image: url('${coverUrl}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 40px 16px;
        position: relative;
      }
      body::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
        z-index: 0;
      }
      .content {
        position: relative;
        z-index: 1;
        text-align: center;
        width: 100%;
        max-width: 360px;
      }
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid #fff;
        object-fit: cover;
        box-shadow: 0 0 15px rgba(255,255,255,0.3);
        margin-bottom: 12px;
      }
      h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
      }
      .bio {
        font-size: 13px;
        color: #ddd;
        margin-bottom: 4px;
      }
      .sub {
        font-size: 13px;
        color: #ccc;
        margin-bottom: 2px;
      }
      .company {
        font-size: 13px;
        font-weight: 700;
        background: linear-gradient(90deg, #00e1ff, #b77bff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 6px;
      }
      .motto {
        font-size: 12px;
        color: #eee;
        font-style: italic;
        margin: 14px auto 12px auto;
        max-width: 300px;
        line-height: 1.5;
      }
      .qr {
        margin: 10px auto 18px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      .qr img {
        width: 110px;
        height: 110px;
        border-radius: 12px;
        background: white;
        padding: 8px;
        box-shadow: 0 0 20px rgba(255,255,255,0.35);
      }
      .qr p {
        font-size: 10px;
        color: #ccc;
        letter-spacing: 0.3px;
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 10px;
        align-items: center;
      }
      a.link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 260px;
        padding: 8px;
        border-radius: 999px;
        background: rgba(255,255,255,0.12);
        color: white;
        font-size: 12px;
        text-decoration: none;
        transition: 0.25s;
      }
      a.link:hover { background: rgba(255,255,255,0.25); }
      .socials {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin: 12px 0;
      }
      .socials img {
        width: 20px;
        height: 20px;
        opacity: 0.9;
        transition: 0.25s;
      }
      .socials img:hover { transform: scale(1.1); opacity: 1; }
      footer {
        position: relative;
        z-index: 1;
        font-size: 11px;
        color: #aaa;
        text-align: center;
        margin-top: 20px;
        line-height: 1.4;
      }
      @media (max-width: 480px) {
        body { padding: 24px 12px; }
        h1 { font-size: 18px; }
        .avatar { width: 85px; height: 85px; }
        a.link { width: 90%; font-size: 13px; }
        .qr img { width: 95px; height: 95px; }
      }
    </style>
  </head>
  <body>
    <div class="content">
      ${avatarUrl ? `<img src="${avatarUrl}" class="avatar" alt="${profile.full_name || ""}"/>` : ""}
      <h1>${profile.full_name || ""}</h1>
      ${profile.bio_short ? `<p class="bio">${profile.bio_short}</p>` : ""}
      ${profile.title ? `<p class="sub">${profile.title}</p>` : ""}
      ${profile.organization ? `<p class="company">${profile.organization}</p>` : ""}
      ${profile.intro ? `<p class="motto">${profile.intro}</p>` : ""}

      <div class="qr">
        ${
          profile.domain
            ? `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${profile.domain}" alt="QR Code" />`
            : ""
        }
        <p>Scan to view profile</p>
      </div>

      <div class="links">
        ${
          profile.domain
            ? `<a href="${profile.domain}" target="_blank" class="link">🌐 ${profile.domain}</a>`
            : ""
        }
        ${
          profile.email
            ? `<a href="mailto:${profile.email}" class="link">✉️ ${profile.email}</a>`
            : ""
        }
        ${
          profile.phone
            ? `<a href="tel:${profile.phone}" class="link">📞 ${profile.phone}</a>`
            : ""
        }
      </div>

      <div class="socials">
        ${
          profile.facebook
            ? `<a href="${profile.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"/></a>`
            : ""
        }
        ${
          profile.zalo
            ? `<a href="https://zalo.me/${profile.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"/></a>`
            : ""
        }
        ${
          profile.tiktok
            ? `<a href="${profile.tiktok}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046125.png"/></a>`
            : ""
        }
        ${
          profile.instagram
            ? `<a href="${profile.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/></a>`
            : ""
        }
      </div>

      <footer>
        ${profile.location ? `<p>${profile.location}</p>` : ""}
        ${languages ? `<p>${languages}</p>` : ""}
        <p>© 2025 HYPER ME</p>
      </footer>
    </div>
  </body>
  </html>`;
}

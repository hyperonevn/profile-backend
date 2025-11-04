export function renderTemplate(profile) {
  const socials = profile.socials || {};
  const languages = profile.language?.length ? profile.language.join(" ") : "";

  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name} | ${profile.company_bold}</title>
    <meta name="description" content="${profile.intro || ''}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: radial-gradient(circle at 40% 20%, #0b1220, #0a0c10 70%);
        color: #f5f6fa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        padding: 40px 0;
      }

      .card {
        position: relative;
        width: 400px;
        max-width: 95vw;
        border-radius: 28px;
        overflow: hidden;
        text-align: center;
        background: linear-gradient(165deg, rgba(20,25,40,0.96), rgba(10,12,20,0.98));
        border: 2px solid rgba(80,150,255,0.25);
        box-shadow: 0 0 40px rgba(50,100,200,0.15), inset 0 0 25px rgba(150,180,255,0.1);
        animation: bluePulse 8s linear infinite;
      }
      @keyframes bluePulse {
        0% { box-shadow: 0 0 40px rgba(50,100,200,0.15), inset 0 0 25px rgba(150,180,255,0.1); }
        50% { box-shadow: 0 0 60px rgba(120,170,255,0.25), inset 0 0 35px rgba(200,220,255,0.15); }
        100% { box-shadow: 0 0 40px rgba(50,100,200,0.15), inset 0 0 25px rgba(150,180,255,0.1); }
      }

      .rank {
        position: absolute;
        top: 14px;
        right: 16px;
        font-weight: 900;
        font-size: 16px;
        letter-spacing: 1.5px;
        padding: 7px 20px;
        border-radius: 999px;
        color: #f4f7ff;
        background: linear-gradient(135deg, #8bb5ff, #4d7eff, #2852b9);
        box-shadow: 0 0 20px rgba(80,140,255,0.4), inset 0 0 12px rgba(255,255,255,0.15);
        border: 1px solid rgba(150,180,255,0.3);
        text-shadow: 0 0 8px rgba(0,0,0,0.4);
      }

      .cover {
        width: 100%;
        height: 150px;
        background: linear-gradient(120deg, #1b3b77, #0a1628, #0f203f);
        background-size: 300% 300%;
        animation: bgShift 10s ease infinite;
      }
      @keyframes bgShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .content {
        padding: 0 24px 36px;
        margin-top: -45px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid rgba(150,180,255,0.8);
        box-shadow: 0 0 25px rgba(100,160,255,0.3);
      }

      h1 {
        margin-top: 12px;
        font-size: 22px;
        font-weight: 700;
        color: #f1f5ff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        text-shadow: 0 0 10px rgba(120,180,255,0.3);
      }

      .blue-tick {
        width: 16px;
        height: 16px;
        background: radial-gradient(circle at 30% 30%, #5bc6ff, #2670ff 70%);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 8px rgba(80,150,255,0.6);
      }
      .blue-tick::after {
        content: "✓";
        color: white;
        font-size: 11px;
        font-weight: 900;
      }

      .verified-zalo {
        color: #56f0b7;
        font-size: 12px;
        font-weight: 500;
        margin-top: 4px;
      }

      .roles { font-size: 13px; color: #a8b3cc; margin-top: 8px; font-style: italic; }
      .intro { font-size: 12px; color: #cfd6e6; margin-top: 8px; font-style: italic; }

      .company-box {
        background: linear-gradient(145deg, rgba(30,40,60,0.9), rgba(20,25,40,0.95));
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        padding: 14px 20px;
        text-align: center;
        margin-top: 18px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 0 6px rgba(255,255,255,0.06);
      }

      .position { font-size: 13px; font-weight: 600; color: #f5f6fa; }
      .company { font-size: 14px; font-weight: 700; color: #6bb0ff; margin-top: 4px; }
      .company-address { font-size: 11px; color: #8a94ac; margin-top: 3px; }

      .qr { margin-top: 22px; }
      .qr img {
        width: 90px; height: 90px;
        border-radius: 12px;
        background: rgba(255,255,255,0.03);
        padding: 6px;
        border: 1px solid rgba(150,180,255,0.25);
        box-shadow: 0 0 25px rgba(80,140,255,0.2);
      }
      .qr p { font-size: 9px; color: #9ca8c8; margin-top: 4px; }

      .contact-box {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .contact-item {
        width: calc(100% + 8px);
        margin-left: -4px;
        padding: 10px 14px;
        border-radius: 10px;
        border: 1px solid rgba(120,160,255,0.25);
        background: linear-gradient(90deg, rgba(20,30,50,0.7), rgba(15,20,35,0.9));
        font-size: 12px;
        color: #f5f6fa;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .contact-item a { color: #89baff; text-decoration: none; }

      /* FIX + UPGRADE SOCIAL ICONS */
      .socials {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 14px;
        margin: 24px 0 16px 0;
      }
      .socials a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid rgba(150,180,255,0.25);
        background: radial-gradient(circle at 30% 30%, rgba(40,60,100,0.6), rgba(10,15,25,0.9));
        transition: 0.3s;
        box-shadow: 0 0 8px rgba(120,160,255,0.1);
      }
      .socials a:hover {
        transform: scale(1.15);
        border-color: rgba(150,180,255,0.6);
        box-shadow: 0 0 15px rgba(130,170,255,0.4);
        background: linear-gradient(145deg, rgba(70,100,180,0.9), rgba(20,30,60,0.95));
      }
      .socials img {
        width: 18px;
        height: 18px;
        filter: brightness(1.1);
        opacity: 0.95;
      }

      footer {
        font-size: 10.5px;
        color: #a0a7b5;
        text-align: center;
        margin-top: 24px;
        line-height: 1.6;
      }

      .cta {
        margin-top: 32px;
        text-align: center;
        color: #88b6ff;
        text-shadow: 0 0 10px rgba(130,170,255,0.5);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.6;
      }

      .cta a {
        display: block;
        margin-top: 4px;
        color: #fff;
        background: linear-gradient(90deg, #4d7eff, #2852b9);
        padding: 10px 22px;
        border-radius: 22px;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 0 20px rgba(80,140,255,0.5);
        transition: 0.3s;
      }
      .cta a:hover { background: linear-gradient(90deg, #6699ff, #3266d0); transform: scale(1.06); }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="cover"></div>
      <div class="rank">BUSINESS</div>

      <div class="content">
        <img src="${profile.image}" alt="${profile.roles}" class="avatar" />
        <h1>${profile.full_name} ${profile.verified_account ? `<span class="blue-tick"></span>` : ""}</h1>
        ${profile.identity_verified ? `<p class="verified-zalo">✅ Verified via Zalo OA</p>` : ""}
        <p class="roles">${profile.roles}</p>
        ${profile.intro ? `<p class="intro">“${profile.intro}”</p>` : ""}

        <div class="company-box">
          <p class="position">${profile.position}</p>
          <p class="company">${profile.company_bold}</p>
          <p class="company-address">${profile.company_address || ""}</p>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${profile.domain}" alt="QR" />
          <p>Quét để xem hồ sơ</p>
        </div>

        <div class="contact-box">
          ${profile.domain ? `<div class="contact-item"><a href="https://${profile.domain}" target="_blank">${profile.domain}</a></div>` : ""}
          ${socials.email ? `<div class="contact-item">✉️ <a href="mailto:${socials.email}">${socials.email}</a></div>` : ""}
          ${profile.phone ? `<div class="contact-item">📞 <a href="tel:${profile.phone}">${profile.phone}</a></div>` : ""}
          ${profile.location ? `<div class="contact-item">📍 ${profile.location}</div>` : ""}
        </div>

        <div class="socials">
          ${socials.facebook ? `<a href="${socials.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" /></a>` : ""}
          ${socials.instagram ? `<a href="${socials.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>` : ""}
          ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" /></a>` : ""}
          ${socials.youtube ? `<a href="${socials.youtube}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>` : ""}
          ${socials.tiktok ? `<a href="${socials.tiktok}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" /></a>` : ""}
          ${socials.zalo ? `<a href="https://zalo.me/${socials.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" /></a>` : ""}
        </div>

        <footer>
          <p><b>Powered by HYPER ONE</b></p>
          <p>© 2025 HYPER ME – BUSINESS</p>
          <p>HYPER ONE CO., LTD · All rights reserved.</p>
        </footer>
      </div>
    </div>

    <div class="cta">
      <strong>🔥 Tạo card visit chuyên nghiệp,</strong>
      <strong>sở hữu địa chỉ web cá nhân của riêng bạn tại</strong>
      <a href="https://profile.io.vn" target="_blank">profile.io.vn</a>
    </div>
  </body>
  </html>`;
}

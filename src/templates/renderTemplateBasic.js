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
        background: radial-gradient(circle at 40% 20%, #0b1220, #080b11 70%);
        color: #e9edf5;
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
        background: linear-gradient(165deg, rgba(15,20,35,0.95), rgba(8,10,18,0.98));
        border: 1.5px solid rgba(100,130,180,0.2);
        box-shadow: 0 0 28px rgba(80,120,200,0.08), inset 0 0 20px rgba(160,180,240,0.05);
        animation: softPulse 10s linear infinite;
      }
      @keyframes softPulse {
        0% { box-shadow: 0 0 28px rgba(80,120,200,0.08), inset 0 0 20px rgba(160,180,240,0.05); }
        50% { box-shadow: 0 0 45px rgba(120,160,220,0.12), inset 0 0 25px rgba(180,200,255,0.08); }
        100% { box-shadow: 0 0 28px rgba(80,120,200,0.08), inset 0 0 20px rgba(160,180,240,0.05); }
      }

      .cover {
        width: 100%;
        height: 150px;
        background: linear-gradient(120deg, #1c2b45, #0c1525, #142238);
        background-size: 300% 300%;
        animation: bgShift 12s ease infinite;
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
        border: 2px solid rgba(130,160,220,0.5);
        box-shadow: 0 0 18px rgba(110,150,220,0.15);
      }

      h1 {
        margin-top: 12px;
        font-size: 22px;
        font-weight: 700;
        color: #f2f6ff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        text-shadow: 0 0 8px rgba(120,160,230,0.2);
      }

      .blue-tick {
        width: 16px;
        height: 16px;
        background: radial-gradient(circle at 30% 30%, #5bc6ff, #2670ff 70%);
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 6px rgba(80,150,255,0.5);
      }
      .blue-tick::after {
        content: "✓";
        color: white;
        font-size: 11px;
        font-weight: 900;
      }

      .verified-zalo {
        color: #65e8b9;
        font-size: 12px;
        font-weight: 500;
        margin-top: 4px;
      }

      .roles { font-size: 13px; color: #a8b3cc; margin-top: 8px; font-style: italic; }
      .intro { font-size: 12px; color: #d4dbec; margin-top: 8px; font-style: italic; }

      .company-box {
        background: linear-gradient(145deg, rgba(25,30,45,0.9), rgba(15,20,30,0.95));
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 16px;
        padding: 14px 20px;
        text-align: center;
        margin-top: 18px;
        box-shadow: inset 0 0 5px rgba(255,255,255,0.03);
      }

      .position { font-size: 13px; font-weight: 600; color: #f5f6fa; }
      .company { font-size: 14px; font-weight: 700; color: #7ca8ff; margin-top: 4px; }
      .company-address { font-size: 11px; color: #8a94ac; margin-top: 3px; }

      .qr { margin-top: 22px; }
      .qr img {
        width: 90px; height: 90px;
        border-radius: 12px;
        background: rgba(255,255,255,0.03);
        padding: 6px;
        border: 1px solid rgba(130,160,220,0.2);
        box-shadow: 0 0 18px rgba(100,140,220,0.15);
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
        border: 1px solid rgba(100,140,220,0.2);
        background: linear-gradient(90deg, rgba(20,30,50,0.6), rgba(15,20,35,0.85));
        font-size: 12px;
        color: #f5f6fa;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .contact-item a { color: #89baff; text-decoration: none; }

      .socials {
        display: flex;
        justify-content: center;
        gap: 18px;
        margin: 20px 0 12px 0;
      }
      .socials img {
        width: 22px; height: 22px;
        opacity: 0.9;
        transition: 0.3s;
        filter: drop-shadow(0 0 6px rgba(100,140,220,0.25));
      }
      .socials img:hover { transform: scale(1.1); opacity: 1; }

      footer {
        font-size: 10.5px;
        color: #a0a7b5;
        text-align: center;
        margin-top: 24px;
        line-height: 1.6;
      }
      footer p:first-child { font-weight: 600; color: #6da5ff; }
      footer p:nth-child(2), footer p:nth-child(3) { color: #c5d4ff; }

      .cta {
        margin-top: 32px;
        text-align: center;
        color: #7faaff;
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
      }
      .cta a:hover { background: linear-gradient(90deg, #6f9cff, #3668d4); transform: scale(1.06); }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="cover"></div>

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
          ${socials.facebook ? `<a href="${socials.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png"/></a>` : ""}
          ${socials.instagram ? `<a href="${socials.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/></a>` : ""}
          ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/></a>` : ""}
          ${socials.youtube ? `<a href="${socials.youtube}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"/></a>` : ""}
          ${socials.tiktok ? `<a href="${socials.tiktok}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"/></a>` : ""}
          ${socials.zalo ? `<a href="https://zalo.me/${socials.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"/></a>` : ""}
        </div>

        <footer>
          <p><b>Powered by HYPER ONE</b></p>
          <p>© 2025 HYPER ME</p>
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

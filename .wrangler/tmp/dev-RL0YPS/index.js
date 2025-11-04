var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// ../../../.config/yarn/global/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../.config/yarn/global/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// src/templates/renderTemplateVVIP.js
var renderTemplateVVIP_exports = {};
__export(renderTemplateVVIP_exports, {
  renderTemplate: () => renderTemplate
});
function renderTemplate(profile) {
  const socials = profile.socials || {};
  const languages = profile.language?.length ? profile.language.join(" ") : "";
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name} | ${profile.company_bold}</title>
    <meta name="description" content="${profile.intro || ""}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: radial-gradient(circle at 40% 20%, #050505, #000 80%);
        color: #f6f5ef;
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
        background: linear-gradient(165deg, rgba(15,15,15,0.96), rgba(5,5,5,0.94));
        border: 2px solid rgba(255,215,100,0.3);
        box-shadow: 0 0 50px rgba(255,215,0,0.2), inset 0 0 25px rgba(255,230,150,0.15);
        animation: goldFlow 8s linear infinite;
      }
      @keyframes goldFlow {
        0% { box-shadow: 0 0 50px rgba(255,215,0,0.2), inset 0 0 25px rgba(255,230,150,0.15); }
        50% { box-shadow: 0 0 70px rgba(255,230,150,0.4), inset 0 0 35px rgba(255,240,180,0.3); }
        100% { box-shadow: 0 0 50px rgba(255,215,0,0.2), inset 0 0 25px rgba(255,230,150,0.15); }
      }

      .rank {
        position: absolute;
        top: 14px;
        right: 16px;
        font-weight: 900;
        font-size: 18px;
        letter-spacing: 1.5px;
        padding: 7px 20px;
        border-radius: 999px;
        color: #000;
        background: linear-gradient(135deg, #fef7c7, #e6c776, #b88c1b);
        box-shadow: 0 0 25px rgba(255,220,120,0.5), inset 0 0 12px rgba(255,255,255,0.3);
        border: 1px solid rgba(255,230,160,0.6);
        background-size: 250% 250%;
        animation: metallicShift 5s ease-in-out infinite alternate;
        text-shadow: 0 0 10px rgba(255,250,200,0.8);
      }
      .rank span.v {
        font-size: 22px;
        font-weight: 900;
        color: #000;
        -webkit-text-stroke: 1px #ffdd66;
        text-shadow: 0 0 10px rgba(255,230,120,1), 0 0 25px rgba(255,240,150,0.8);
      }
      @keyframes metallicShift {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }

      .cover {
        width: 100%;
        height: 150px;
        background: linear-gradient(120deg, #302812, #1c1406, #100b02);
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
        border: 2px solid rgba(255,215,120,0.8);
        box-shadow: 0 0 30px rgba(255,220,120,0.3);
      }

      h1 {
        margin-top: 12px;
        font-size: 22px;
        font-weight: 700;
        color: #fff8e5;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        text-shadow: 0 0 10px rgba(255,230,150,0.3);
      }

      .roles { font-size: 13px; color: #e6dcac; margin-top: 8px; font-style: italic; }
      .intro { font-size: 12px; color: #f3e7b8; margin-top: 8px; font-style: italic; }

      .verified-zalo {
        color: #f8e08a;
        font-size: 12px;
        font-weight: 500;
        margin-top: 5px;
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
        content: "\u2713";
        color: white;
        font-size: 11px;
        font-weight: 900;
      }

      .company-box {
        background: linear-gradient(145deg, rgba(45,40,25,0.9), rgba(20,15,10,0.95));
        border: 1px solid rgba(255,215,150,0.25);
        border-radius: 16px;
        padding: 14px 20px;
        text-align: center;
        margin-top: 18px;
        box-shadow: 0 0 15px rgba(255,220,120,0.1);
      }

      .position { font-size: 13px; font-weight: 600; color: #f8f6e0; }
      .company { font-size: 14px; font-weight: 700; color: #ffdb6e; margin-top: 4px; text-shadow: 0 0 10px rgba(255,220,100,0.4); }
      .company-address { font-size: 11px; color: #bfb68a; margin-top: 3px; }

      .qr { margin-top: 22px; }
      .qr img {
        width: 90px; height: 90px;
        border-radius: 12px;
        background: rgba(255,255,255,0.05);
        padding: 6px;
        border: 1px solid rgba(255,230,160,0.25);
        box-shadow: 0 0 25px rgba(255,215,100,0.25);
      }
      .qr p { font-size: 9px; color: #bfb68a; margin-top: 4px; }

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
        border: 1px solid rgba(255,220,150,0.25);
        background: linear-gradient(90deg, rgba(45,35,15,0.6), rgba(20,15,10,0.85));
        font-size: 12px;
        color: #f6f5ef;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 0 0 12px rgba(255,220,100,0.1);
      }
      .contact-item a { color: #ffde88; text-decoration: none; }

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
        filter: drop-shadow(0 0 6px rgba(255,215,100,0.3));
      }
      .socials img:hover { transform: scale(1.1); opacity: 1; }

      footer {
        font-size: 10.5px;
        color: #d1c7a2;
        text-align: center;
        margin-top: 24px;
        line-height: 1.6;
      }
      footer p:first-child { font-weight: 600; color: #ffdf8a; }
      footer p:nth-child(2), footer p:nth-child(3) { color: #f3eac0; }

      .cta {
        margin-top: 32px;
        text-align: center;
        color: #ffde8a;
        text-shadow: 0 0 10px rgba(255,230,120,0.6);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.6;
      }
      .cta strong { display: block; color: #ffedaf; margin-bottom: 6px; }
      .cta a {
        display: block;
        margin-top: 4px;
        color: #fff;
        background: linear-gradient(90deg, #ffce3d, #ffb800);
        padding: 10px 22px;
        border-radius: 22px;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 0 20px rgba(255,220,100,0.6);
        transition: 0.3s;
      }
      .cta a:hover { background: linear-gradient(90deg, #ffd966, #ffb700); transform: scale(1.06); }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="cover"></div>
      <div class="rank"><span class="v">V</span>VIP</div>

      <div class="content">
        <img src="${profile.image}" alt="${profile.roles}" class="avatar" />
        <h1>
          ${profile.full_name}
          ${profile.verified_account ? `<span class="blue-tick"></span>` : ""}
        </h1>
        ${profile.identity_verified ? `<p class="verified-zalo">\u2705 Verified via Zalo OA</p>` : ""}
        <p class="roles">${profile.roles}</p>
        ${profile.intro ? `<p class="intro">\u201C${profile.intro}\u201D</p>` : ""}

        <div class="company-box">
          <p class="position">${profile.position}</p>
          <p class="company">${profile.company_bold}</p>
          <p class="company-address">${profile.company_address || ""}</p>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${profile.domain}" alt="QR" />
          <p>Qu\xE9t \u0111\u1EC3 xem h\u1ED3 s\u01A1</p>
        </div>

        <div class="contact-box">
          ${profile.domain ? `<div class="contact-item"><a href="https://${profile.domain}" target="_blank">${profile.domain}</a></div>` : ""}
          ${socials.email ? `<div class="contact-item">\u2709\uFE0F <a href="mailto:${socials.email}">${socials.email}</a></div>` : ""}
          ${profile.phone ? `<div class="contact-item">\u{1F4DE} <a href="tel:${profile.phone}">${profile.phone}</a></div>` : ""}
          ${profile.location ? `<div class="contact-item">\u{1F4CD} ${profile.location}</div>` : ""}
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
          <p>\xA9 2025 HYPER ME \u2013 VVIP</p>
          <p>HYPER ONE CO., LTD \xB7 All rights reserved.</p>
        </footer>
      </div>
    </div>

    <div class="cta">
      <strong>\u{1F525} T\u1EA1o card visit chuy\xEAn nghi\u1EC7p,</strong>
      <strong>s\u1EDF h\u1EEFu \u0111\u1ECBa ch\u1EC9 web c\xE1 nh\xE2n c\u1EE7a ri\xEAng b\u1EA1n t\u1EA1i</strong>
      <a href="https://profile.io.vn" target="_blank">profile.io.vn</a>
    </div>
  </body>
  </html>`;
}
var init_renderTemplateVVIP = __esm({
  "src/templates/renderTemplateVVIP.js"() {
    init_modules_watch_stub();
    __name(renderTemplate, "renderTemplate");
  }
});

// src/templates/renderTemplateVIP.js
var renderTemplateVIP_exports = {};
__export(renderTemplateVIP_exports, {
  renderTemplate: () => renderTemplate2
});
function renderTemplate2(profile) {
  const socials = profile.socials || {};
  const languages = profile.language?.length ? profile.language.join(" ") : "";
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name} | ${profile.company_bold}</title>
    <meta name="description" content="${profile.intro || ""}" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', sans-serif;
        background: radial-gradient(circle at 40% 20%, #19110a, #0f0a05 70%);
        color: #f5f5f2;
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
        background: linear-gradient(165deg, rgba(30,20,10,0.96), rgba(10,6,3,0.98));
        border: 2px solid rgba(255,210,100,0.3);
        box-shadow: 0 0 40px rgba(255,210,100,0.15), inset 0 0 25px rgba(255,230,150,0.1);
        animation: goldFlow 8s linear infinite;
      }
      @keyframes goldFlow {
        0% { box-shadow: 0 0 40px rgba(255,210,100,0.15), inset 0 0 25px rgba(255,230,150,0.1); }
        50% { box-shadow: 0 0 60px rgba(255,230,150,0.25), inset 0 0 35px rgba(255,240,180,0.2); }
        100% { box-shadow: 0 0 40px rgba(255,210,100,0.15), inset 0 0 25px rgba(255,230,150,0.1); }
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
        color: #2e1c00;
        background: linear-gradient(135deg, #fef5c4, #e3bb53, #b88b22);
        box-shadow: 0 0 20px rgba(255,215,100,0.3), inset 0 0 12px rgba(255,255,255,0.3);
        border: 1px solid rgba(255,230,160,0.6);
        text-shadow: 0 0 10px rgba(255,250,200,0.8);
      }

      .cover {
        width: 100%;
        height: 150px;
        background: linear-gradient(120deg, #5b3d15, #261708, #3a240d);
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
        border: 2px solid rgba(255,215,120,0.8);
        box-shadow: 0 0 30px rgba(255,220,120,0.25);
      }

      h1 {
        margin-top: 12px;
        font-size: 22px;
        font-weight: 700;
        color: #fff8e5;
        text-shadow: 0 0 10px rgba(255,230,150,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
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
        content: "\u2713";
        color: white;
        font-size: 11px;
        font-weight: 900;
      }

      .verified-zalo {
        color: #f8e08a;
        font-size: 12px;
        font-weight: 500;
        margin-top: 5px;
      }

      .roles { font-size: 13px; color: #e6dcac; margin-top: 8px; font-style: italic; }
      .intro { font-size: 12px; color: #f3e7b8; margin-top: 8px; font-style: italic; }

      .company-box {
        background: linear-gradient(145deg, rgba(45,35,20,0.9), rgba(20,15,10,0.95));
        border: 1px solid rgba(255,215,150,0.25);
        border-radius: 16px;
        padding: 14px 20px;
        text-align: center;
        margin-top: 18px;
        box-shadow: 0 0 15px rgba(255,220,120,0.1);
      }

      .position { font-size: 13px; font-weight: 600; color: #f8f6e0; }
      .company { font-size: 14px; font-weight: 700; color: #ffdb6e; margin-top: 4px; text-shadow: 0 0 10px rgba(255,220,100,0.4); }
      .company-address { font-size: 11px; color: #bfb68a; margin-top: 3px; }

      .qr { margin-top: 22px; }
      .qr img {
        width: 90px; height: 90px;
        border-radius: 12px;
        background: rgba(255,255,255,0.05);
        padding: 6px;
        border: 1px solid rgba(255,230,160,0.25);
        box-shadow: 0 0 25px rgba(255,215,100,0.25);
      }
      .qr p { font-size: 9px; color: #bfb68a; margin-top: 4px; }

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
        border: 1px solid rgba(255,220,150,0.25);
        background: linear-gradient(90deg, rgba(45,35,15,0.6), rgba(20,15,10,0.85));
        font-size: 12px;
        color: #f6f5ef;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .contact-item a { color: #ffde88; text-decoration: none; }

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
        filter: drop-shadow(0 0 6px rgba(255,215,100,0.3));
      }
      .socials img:hover { transform: scale(1.1); opacity: 1; }

      footer {
        font-size: 10.5px;
        color: #d1c7a2;
        text-align: center;
        margin-top: 24px;
        line-height: 1.6;
      }
      footer p:first-child { font-weight: 600; color: #ffdf8a; }
      footer p:nth-child(2), footer p:nth-child(3) { color: #f3eac0; }

      .cta {
        margin-top: 32px;
        text-align: center;
        color: #ffde8a;
        text-shadow: 0 0 10px rgba(255,230,120,0.6);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.6;
      }
      .cta strong { display: block; color: #ffedaf; margin-bottom: 6px; }
      .cta a {
        display: block;
        margin-top: 4px;
        color: #fff;
        background: linear-gradient(90deg, #ffce3d, #ffb800);
        padding: 10px 22px;
        border-radius: 22px;
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 0 20px rgba(255,220,100,0.6);
        transition: 0.3s;
      }
      .cta a:hover { background: linear-gradient(90deg, #ffd966, #ffb700); transform: scale(1.06); }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="cover"></div>
      <div class="rank">VIP</div>

      <div class="content">
        <img src="${profile.image}" alt="${profile.roles}" class="avatar" />
        <h1>
          ${profile.full_name}
          ${profile.verified_account ? `<span class="blue-tick"></span>` : ""}
        </h1>
        ${profile.identity_verified ? `<p class="verified-zalo">\u2705 Verified via Zalo OA</p>` : ""}
        <p class="roles">${profile.roles}</p>
        ${profile.intro ? `<p class="intro">\u201C${profile.intro}\u201D</p>` : ""}

        <div class="company-box">
          <p class="position">${profile.position}</p>
          <p class="company">${profile.company_bold}</p>
          <p class="company-address">${profile.company_address || ""}</p>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${profile.domain}" alt="QR" />
          <p>Qu\xE9t \u0111\u1EC3 xem h\u1ED3 s\u01A1</p>
        </div>

        <div class="contact-box">
          ${profile.domain ? `<div class="contact-item"><a href="https://${profile.domain}" target="_blank">${profile.domain}</a></div>` : ""}
          ${socials.email ? `<div class="contact-item">\u2709\uFE0F <a href="mailto:${socials.email}">${socials.email}</a></div>` : ""}
          ${profile.phone ? `<div class="contact-item">\u{1F4DE} <a href="tel:${profile.phone}">${profile.phone}</a></div>` : ""}
          ${profile.location ? `<div class="contact-item">\u{1F4CD} ${profile.location}</div>` : ""}
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
          <p>\xA9 2025 HYPER ME \u2013 VIP</p>
          <p>HYPER ONE CO., LTD \xB7 All rights reserved.</p>
        </footer>
      </div>
    </div>

    <div class="cta">
      <strong>\u{1F525} T\u1EA1o card visit chuy\xEAn nghi\u1EC7p,</strong>
      <strong>s\u1EDF h\u1EEFu \u0111\u1ECBa ch\u1EC9 web c\xE1 nh\xE2n c\u1EE7a ri\xEAng b\u1EA1n t\u1EA1i</strong>
      <a href="https://profile.io.vn" target="_blank">profile.io.vn</a>
    </div>
  </body>
  </html>`;
}
var init_renderTemplateVIP = __esm({
  "src/templates/renderTemplateVIP.js"() {
    init_modules_watch_stub();
    __name(renderTemplate2, "renderTemplate");
  }
});

// src/templates/renderTemplateBusiness.js
var renderTemplateBusiness_exports = {};
__export(renderTemplateBusiness_exports, {
  renderTemplate: () => renderTemplate3
});
function renderTemplate3(profile) {
  const socials = profile.socials || {};
  const languages = profile.language?.length ? profile.language.join(" ") : "";
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name} | ${profile.company_bold}</title>
    <meta name="description" content="${profile.intro || ""}" />
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
        content: "\u2713";
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
        ${profile.identity_verified ? `<p class="verified-zalo">\u2705 Verified via Zalo OA</p>` : ""}
        <p class="roles">${profile.roles}</p>
        ${profile.intro ? `<p class="intro">\u201C${profile.intro}\u201D</p>` : ""}

        <div class="company-box">
          <p class="position">${profile.position}</p>
          <p class="company">${profile.company_bold}</p>
          <p class="company-address">${profile.company_address || ""}</p>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${profile.domain}" alt="QR" />
          <p>Qu\xE9t \u0111\u1EC3 xem h\u1ED3 s\u01A1</p>
        </div>

        <div class="contact-box">
          ${profile.domain ? `<div class="contact-item"><a href="https://${profile.domain}" target="_blank">${profile.domain}</a></div>` : ""}
          ${socials.email ? `<div class="contact-item">\u2709\uFE0F <a href="mailto:${socials.email}">${socials.email}</a></div>` : ""}
          ${profile.phone ? `<div class="contact-item">\u{1F4DE} <a href="tel:${profile.phone}">${profile.phone}</a></div>` : ""}
          ${profile.location ? `<div class="contact-item">\u{1F4CD} ${profile.location}</div>` : ""}
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
          <p>\xA9 2025 HYPER ME \u2013 BUSINESS</p>
          <p>HYPER ONE CO., LTD \xB7 All rights reserved.</p>
        </footer>
      </div>
    </div>

    <div class="cta">
      <strong>\u{1F525} T\u1EA1o card visit chuy\xEAn nghi\u1EC7p,</strong>
      <strong>s\u1EDF h\u1EEFu \u0111\u1ECBa ch\u1EC9 web c\xE1 nh\xE2n c\u1EE7a ri\xEAng b\u1EA1n t\u1EA1i</strong>
      <a href="https://profile.io.vn" target="_blank">profile.io.vn</a>
    </div>
  </body>
  </html>`;
}
var init_renderTemplateBusiness = __esm({
  "src/templates/renderTemplateBusiness.js"() {
    init_modules_watch_stub();
    __name(renderTemplate3, "renderTemplate");
  }
});

// src/templates/renderTemplateBasic.js
var renderTemplateBasic_exports = {};
__export(renderTemplateBasic_exports, {
  renderTemplate: () => renderTemplate4
});
function renderTemplate4(profile) {
  const socials = profile.socials || {};
  const languages = profile.language?.length ? profile.language.join(" ") : "";
  return `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${profile.full_name} | ${profile.company_bold}</title>
    <meta name="description" content="${profile.intro || ""}" />
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
        content: "\u2713";
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
        ${profile.identity_verified ? `<p class="verified-zalo">\u2705 Verified via Zalo OA</p>` : ""}
        <p class="roles">${profile.roles}</p>
        ${profile.intro ? `<p class="intro">\u201C${profile.intro}\u201D</p>` : ""}

        <div class="company-box">
          <p class="position">${profile.position}</p>
          <p class="company">${profile.company_bold}</p>
          <p class="company-address">${profile.company_address || ""}</p>
        </div>

        <div class="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://${profile.domain}" alt="QR" />
          <p>Qu\xE9t \u0111\u1EC3 xem h\u1ED3 s\u01A1</p>
        </div>

        <div class="contact-box">
          ${profile.domain ? `<div class="contact-item"><a href="https://${profile.domain}" target="_blank">${profile.domain}</a></div>` : ""}
          ${socials.email ? `<div class="contact-item">\u2709\uFE0F <a href="mailto:${socials.email}">${socials.email}</a></div>` : ""}
          ${profile.phone ? `<div class="contact-item">\u{1F4DE} <a href="tel:${profile.phone}">${profile.phone}</a></div>` : ""}
          ${profile.location ? `<div class="contact-item">\u{1F4CD} ${profile.location}</div>` : ""}
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
          <p>\xA9 2025 HYPER ME</p>
          <p>HYPER ONE CO., LTD \xB7 All rights reserved.</p>
        </footer>
      </div>
    </div>

    <div class="cta">
      <strong>\u{1F525} T\u1EA1o card visit chuy\xEAn nghi\u1EC7p,</strong>
      <strong>s\u1EDF h\u1EEFu \u0111\u1ECBa ch\u1EC9 web c\xE1 nh\xE2n c\u1EE7a ri\xEAng b\u1EA1n t\u1EA1i</strong>
      <a href="https://profile.io.vn" target="_blank">profile.io.vn</a>
    </div>
  </body>
  </html>`;
}
var init_renderTemplateBasic = __esm({
  "src/templates/renderTemplateBasic.js"() {
    init_modules_watch_stub();
    __name(renderTemplate4, "renderTemplate");
  }
});

// .wrangler/tmp/bundle-JNAULv/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-JNAULv/middleware-insertion-facade.js
init_modules_watch_stub();

// src/index.js
init_modules_watch_stub();

// src/routes/loadProfile.js
init_modules_watch_stub();

// src/utils/buildProfileData.js
init_modules_watch_stub();
function buildProfileData(result = {}, env = {}) {
  const CDN = env.CDN_BASE || "https://cdn.profile.io.vn";
  const safe = /* @__PURE__ */ __name((v) => v === null || v === void 0 ? "" : String(v), "safe");
  const subdomain = safe(result.subdomain);
  return {
    // 🌐 Thông tin định danh
    subdomain,
    full_name: safe(result.full_name || result.name),
    name: safe(result.name),
    // 💼 Nghề nghiệp & giới thiệu
    position: safe(result.position),
    intro: safe(result.intro),
    company_bold: safe(result.company_bold),
    company_role: safe(result.company_role),
    company_address: safe(result.company_address),
    roles: safe(result.roles),
    tags: safe(result.tags),
    // 🖼️ Giao diện hiển thị
    cover: subdomain ? `${CDN}/users/${subdomain}/cover.jpg` : safe(result.cover),
    image: subdomain ? `${CDN}/users/${subdomain}/avatar.jpg` : safe(result.image),
    theme_color: safe(result.theme_color || "#ff72c6"),
    accent_effect: safe(result.accent_effect || "glass"),
    font_family: safe(result.font_family || "Inter"),
    layout_style: safe(result.layout_style || "modern"),
    // 🔗 Liên hệ
    phone: safe(result.phone),
    location: safe(result.location),
    language: result.language ? String(result.language).split(",").map((l) => l.trim()) : [],
    // 📬 Mạng xã hội
    socials: {
      email: safe(result.socials_email),
      facebook: safe(result.socials_facebook),
      zalo: safe(result.socials_zalo),
      linkedin: safe(result.socials_linkedin),
      instagram: safe(result.socials_instagram),
      tiktok: safe(result.socials_tiktok),
      youtube: safe(result.socials_youtube)
    },
    // 🏢 Thông tin doanh nghiệp
    company_website: safe(result.company_website),
    company_email: safe(result.company_email),
    // ✅ Xác thực
    verified_account: !!result.verified_account,
    // tích xanh công khai
    identity_verified: !!result.identity_verified,
    // đã xác thực danh tính
    id_type: safe(result.id_type),
    id_verified_at: safe(result.id_verified_at),
    identity_note: safe(result.identity_note),
    // 💎 Gói người dùng
    plan: safe(result.plan || "BASIC"),
    // 📊 Thống kê
    view_count: Number(result.view_count || 0),
    click_count: Number(result.click_count || 0),
    last_updated: safe(result.last_updated),
    // 🌐 Domain chính thức
    domain: subdomain ? `${subdomain}.profile.io.vn` : ""
  };
}
__name(buildProfileData, "buildProfileData");

// src/routes/loadProfile.js
async function loadProfile(request, env, subdomain) {
  const result = await env.profile_db.prepare(
    "SELECT * FROM profiles WHERE subdomain = ?"
  ).bind(subdomain).first();
  if (!result) {
    return new Response(`<h1>Kh\xF4ng t\xECm th\u1EA5y h\u1ED3 s\u01A1 cho ${subdomain}</h1>`, {
      headers: { "content-type": "text/html; charset=utf-8" },
      status: 404
    });
  }
  const normalized = {};
  for (const key in result) normalized[key.toLowerCase()] = result[key];
  const profile = buildProfileData(normalized);
  let renderTemplateFn;
  switch ((profile.plan || "").toUpperCase()) {
    case "VVIP":
      renderTemplateFn = (await Promise.resolve().then(() => (init_renderTemplateVVIP(), renderTemplateVVIP_exports))).renderTemplate;
      break;
    case "VIP":
      renderTemplateFn = (await Promise.resolve().then(() => (init_renderTemplateVIP(), renderTemplateVIP_exports))).renderTemplate;
      break;
    case "BUSINESS":
    case "PRO":
      renderTemplateFn = (await Promise.resolve().then(() => (init_renderTemplateBusiness(), renderTemplateBusiness_exports))).renderTemplate;
      break;
    default:
      renderTemplateFn = (await Promise.resolve().then(() => (init_renderTemplateBasic(), renderTemplateBasic_exports))).renderTemplate;
      break;
  }
  const html = renderTemplateFn(profile, env);
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
__name(loadProfile, "loadProfile");

// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const hostParts = url.hostname.split(".");
      const subdomain = hostParts.length > 2 ? hostParts[0] : "home";
      if (!env.profile_db) {
        return new Response(
          "\u26A0\uFE0F L\u1ED7i c\u1EA5u h\xECnh: env.profile_db kh\xF4ng t\u1ED3n t\u1EA1i. Ki\u1EC3m tra binding trong wrangler.toml.",
          { status: 500, headers: { "content-type": "text/plain; charset=UTF-8" } }
        );
      }
      return await loadProfile(request, env, subdomain);
    } catch (error) {
      console.error("\u{1F525} Worker Error:", error);
      return new Response(
        `L\u1ED7i h\u1EC7 th\u1ED1ng: ${error.message}`,
        { status: 500, headers: { "content-type": "text/plain; charset=UTF-8" } }
      );
    }
  }
};

// ../../../.config/yarn/global/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../.config/yarn/global/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-JNAULv/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../../.config/yarn/global/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-JNAULv/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map

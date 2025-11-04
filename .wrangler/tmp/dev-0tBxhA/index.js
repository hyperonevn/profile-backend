var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/templates/renderTemplate.js
function renderTemplate(profile = {}, env = {}) {
  const normalized = {};
  for (const key in profile) normalized[key.toLowerCase()] = profile[key];
  profile = normalized;
  const langs = typeof profile.languages === "string" ? JSON.parse(profile.languages) : Array.isArray(profile.languages) ? profile.languages : [];
  const languages = langs.length ? `\u{1F310} ${langs.join(", ")}` : "";
  const CDN = env.CDN_BASE || "";
  const avatarUrl = profile.avatar_path ? `${CDN}/${profile.avatar_path}` : `${CDN}/${profile.subdomain}/avatar.jpg`;
  const coverUrl = profile.cover_path ? `${CDN}/${profile.cover_path}` : `${CDN}/${profile.subdomain}/cover.jpg`;
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
        ${profile.domain ? `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${profile.domain}" alt="QR Code" />` : ""}
        <p>Scan to view profile</p>
      </div>

      <div class="links">
        ${profile.domain ? `<a href="${profile.domain}" target="_blank" class="link">\u{1F310} ${profile.domain}</a>` : ""}
        ${profile.email ? `<a href="mailto:${profile.email}" class="link">\u2709\uFE0F ${profile.email}</a>` : ""}
        ${profile.phone ? `<a href="tel:${profile.phone}" class="link">\u{1F4DE} ${profile.phone}</a>` : ""}
      </div>

      <div class="socials">
        ${profile.facebook ? `<a href="${profile.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"/></a>` : ""}
        ${profile.zalo ? `<a href="https://zalo.me/${profile.zalo}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"/></a>` : ""}
        ${profile.tiktok ? `<a href="${profile.tiktok}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046125.png"/></a>` : ""}
        ${profile.instagram ? `<a href="${profile.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/></a>` : ""}
      </div>

      <footer>
        ${profile.location ? `<p>${profile.location}</p>` : ""}
        ${languages ? `<p>${languages}</p>` : ""}
        <p>\xA9 2025 HYPER ME</p>
      </footer>
    </div>
  </body>
  </html>`;
}
__name(renderTemplate, "renderTemplate");

// src/utils/buildProfileData.js
function buildProfileData(result = {}, env = {}) {
  const CDN = env.CDN_BASE || "https://cdn.profile.io.vn";
  const safe = /* @__PURE__ */ __name((v) => v === null || v === void 0 ? "" : String(v), "safe");
  const subdomain = safe(result.subdomain);
  return {
    full_name: safe(result.name),
    position: safe(result.title),
    company_bold: safe(result.company),
    roles: safe(result.roles),
    intro: safe(result.bio),
    // ✅ Ảnh cover & avatar theo cấu trúc R2 thực tế: users/{subdomain}/...
    cover: subdomain ? `${CDN}/users/${subdomain}/cover.jpg` : safe(result.cover_path) ? `${CDN}/${safe(result.cover_path)}` : "",
    image: subdomain ? `${CDN}/users/${subdomain}/avatar.jpg` : safe(result.avatar_path) ? `${CDN}/${safe(result.avatar_path)}` : "",
    phone: safe(result.phone),
    location: safe(result.location),
    language: result.language ? String(result.language).split(",").map((l) => l.trim()) : [],
    socials: {
      email: safe(result.email),
      facebook: safe(result.facebook),
      zalo: safe(result.zalo)
    },
    domain: subdomain ? `${subdomain}.profile.io.vn` : "",
    subdomain
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
  const html = renderTemplate(profile, env);
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

// .wrangler/tmp/bundle-25uBrr/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../../.config/yarn/global/node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-25uBrr/middleware-loader.entry.ts
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

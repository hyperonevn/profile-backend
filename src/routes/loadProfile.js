import { buildProfileData } from "../utils/buildProfileData.js";

export async function loadProfile(request, env, subdomain) {
  // ✅ Lấy dữ liệu user từ D1
  const result = await env.profile_db.prepare(
    "SELECT * FROM profiles WHERE subdomain = ?"
  ).bind(subdomain).first();

  if (!result) {
    return new Response(`<h1>Không tìm thấy hồ sơ cho ${subdomain}</h1>`, {
      headers: { "content-type": "text/html; charset=utf-8" },
      status: 404,
    });
  }

  // ✅ Chuẩn hóa key (vì D1 trả về IN HOA)
  const normalized = {};
  for (const key in result) normalized[key.toLowerCase()] = result[key];

  // ✅ Chuẩn hóa dữ liệu đầy đủ (gộp CDN + metadata)
  const profile = buildProfileData(normalized);

  // ✅ Chọn template tương ứng theo plan
  let renderTemplateFn;

  switch ((profile.plan || "").toUpperCase()) {
    case "VVIP":
      renderTemplateFn = (await import("../templates/renderTemplateVVIP.js")).renderTemplate;
      break;
    case "VIP":
      renderTemplateFn = (await import("../templates/renderTemplateVIP.js")).renderTemplate;
      break;
    case "BUSINESS":
    case "PRO":
      renderTemplateFn = (await import("../templates/renderTemplateBusiness.js")).renderTemplate;
      break;
    default:
      renderTemplateFn = (await import("../templates/renderTemplateBasic.js")).renderTemplate;
      break;
  }

  // ✅ Render HTML
  const html = renderTemplateFn(profile, env);

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

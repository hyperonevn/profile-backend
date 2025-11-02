import { renderTemplate } from "../templates/renderTemplate.js";
import { buildProfileData } from "../utils/buildProfileData.js";

export async function loadProfile(request, env, subdomain) {
  // ✅ Lấy dữ liệu user từ D1 (đúng binding)
  const result = await env.profile_db.prepare(
    "SELECT * FROM profiles WHERE subdomain = ?"
  ).bind(subdomain).first();

  if (!result) {
    return new Response(`<h1>Không tìm thấy hồ sơ cho ${subdomain}</h1>`, {
      headers: { "content-type": "text/html; charset=utf-8" },
      status: 404,
    });
  }

  // ✅ Chuẩn hóa key (vì D1 trả IN HOA)
  const normalized = {};
  for (const key in result) normalized[key.toLowerCase()] = result[key];

  // ✅ Gộp dữ liệu (CDN + metadata)
  const profile = buildProfileData(normalized);

  // ✅ Render ra HTML hoàn chỉnh
  const html = renderTemplate(profile, env);

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

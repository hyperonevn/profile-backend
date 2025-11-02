import { renderTemplate } from "../templates/renderTemplate.js";
import { buildProfileData } from "../utils/buildProfileData.js";

export async function loadProfile(request, env, subdomain) {
  // Lấy dữ liệu user từ D1
  const result = await env.DB.prepare(
    "SELECT * FROM profiles WHERE subdomain = ?"
  ).bind(subdomain).first();

  if (!result) {
    return new Response(`<h1>Không tìm thấy hồ sơ cho ${subdomain}</h1>`, {
      headers: { "content-type": "text/html; charset=utf-8" },
      status: 404,
    });
  }

  // Gộp dữ liệu chuẩn (tự build link CDN + metadata)
  const profile = buildProfileData(result);

  // Render ra HTML hoàn chỉnh
  const html = renderTemplate(profile);

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

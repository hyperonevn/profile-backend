// /profile-backend/utils/buildProfileData.js
export function buildProfileData(result = {}, env = {}) {
  // ✅ CDN được lấy từ env, có thể override (vd: https://cdn.profile.io.vn)
  const CDN = env.CDN_BASE || "https://cdn.profile.io.vn";

  const safe = (v) => (v === null || v === undefined ? "" : String(v));

  const subdomain = safe(result.subdomain);

  return {
    full_name: safe(result.name),
    position: safe(result.title),
    company_bold: safe(result.company),
    roles: safe(result.roles),
    intro: safe(result.bio),

    // ✅ Ảnh cover & avatar theo cấu trúc R2 thực tế: users/{subdomain}/...
    cover: subdomain
      ? `${CDN}/users/${subdomain}/cover.jpg`
      : safe(result.cover_path)
      ? `${CDN}/${safe(result.cover_path)}`
      : "",

    image: subdomain
      ? `${CDN}/users/${subdomain}/avatar.jpg`
      : safe(result.avatar_path)
      ? `${CDN}/${safe(result.avatar_path)}`
      : "",

    phone: safe(result.phone),
    location: safe(result.location),

    language: result.language
      ? String(result.language).split(",").map((l) => l.trim())
      : [],

    socials: {
      email: safe(result.email),
      facebook: safe(result.facebook),
      zalo: safe(result.zalo),
    },

    domain: subdomain ? `${subdomain}.profile.io.vn` : "",
    subdomain,
  };
}

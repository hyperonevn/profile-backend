// /profile-backend/utils/buildProfileData.js
export function buildProfileData(result = {}, env = {}) {
  // ✅ Lấy CDN gốc (nếu không có thì fallback về CDN chính thức)
  const CDN = env.CDN_BASE || "https://cdn.profile.io.vn";

  const safe = (v) => (v === null || v === undefined ? "" : String(v));
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
    cover: subdomain
      ? `${CDN}/users/${subdomain}/cover.jpg`
      : safe(result.cover),
    image: subdomain
      ? `${CDN}/users/${subdomain}/avatar.jpg`
      : safe(result.image),
    theme_color: safe(result.theme_color || "#ff72c6"),
    accent_effect: safe(result.accent_effect || "glass"),
    font_family: safe(result.font_family || "Inter"),
    layout_style: safe(result.layout_style || "modern"),

    // 🔗 Liên hệ
    phone: safe(result.phone),
    location: safe(result.location),
    language: result.language
      ? String(result.language)
          .split(",")
          .map((l) => l.trim())
      : [],

    // 📬 Mạng xã hội
    socials: {
      email: safe(result.socials_email),
      facebook: safe(result.socials_facebook),
      zalo: safe(result.socials_zalo),
      linkedin: safe(result.socials_linkedin),
      instagram: safe(result.socials_instagram),
      tiktok: safe(result.socials_tiktok),
      youtube: safe(result.socials_youtube),
    },

    // 🏢 Thông tin doanh nghiệp
    company_website: safe(result.company_website),
    company_email: safe(result.company_email),

    // ✅ Xác thực
    verified_account: !!result.verified_account,     // tích xanh công khai
    identity_verified: !!result.identity_verified,   // đã xác thực danh tính
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
    domain: subdomain ? `${subdomain}.profile.io.vn` : "",
  };
}

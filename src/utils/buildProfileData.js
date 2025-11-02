export function buildProfileData(result = {}, env = {}) {
  const CDN = env.CDN_BASE || "https://cdn.profile.io.vn";

  const safe = (v) => (v === null || v === undefined ? "" : String(v));

  return {
    full_name: safe(result.name),
    position: safe(result.title),
    company_bold: safe(result.company),
    roles: safe(result.roles),
    intro: safe(result.bio),
    cover: safe(result.cover_path) ? `${CDN}/${safe(result.cover_path)}` : "",
    image: safe(result.avatar_path) ? `${CDN}/${safe(result.avatar_path)}` : "",
    phone: safe(result.phone),
    location: safe(result.location),
    language: result.language ? String(result.language).split(",").map((l) => l.trim()) : [],
    socials: {
      email: safe(result.email),
      facebook: safe(result.facebook),
      zalo: safe(result.zalo),
    },
    domain: safe(result.subdomain) ? `${result.subdomain}.profile.io.vn` : "",
  };
}

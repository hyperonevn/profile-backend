export function buildProfileData(result, env) {
  const CDN = env?.CDN_BASE || "https://cdn.profile.io.vn";

  return {
    full_name: result.name || "",
    position: result.title || "",
    company_bold: result.company || "",
    roles: result.roles || "",
    intro: result.bio || "",
    cover: result.cover_path ? `${CDN}/${result.cover_path}` : "",
    image: result.avatar_path ? `${CDN}/${result.avatar_path}` : "",
    phone: result.phone || "",
    location: result.location || "",
    language: result.language ? result.language.split(",") : [],
    socials: {
      email: result.email || "",
      facebook: result.facebook || "",
      zalo: result.zalo || "",
    },
    domain: `${result.subdomain}.profile.io.vn`,
  };
}

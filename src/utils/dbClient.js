/**
 * /src/utils/dbClient.js
 * ----------------------
 * Tiện ích thao tác với Cloudflare D1 Database & R2 Storage.
 * Giúp tái sử dụng, tránh lặp code trong các route.
 */

export const dbClient = {
  /**
   * Lấy hồ sơ người dùng theo subdomain
   * @param {string} subdomain
   * @param {object} env - Biến môi trường Worker (có chứa profile_db)
   */
  async getProfile(subdomain, env) {
    const result = await env.profile_db
      .prepare("SELECT * FROM profiles WHERE subdomain = ?")
      .bind(subdomain)
      .first();

    return result || null;
  },

  /**
   * Lưu (insert) hồ sơ mới vào D1
   * @param {object} profileData - Dữ liệu hồ sơ
   * @param {object} env
   */
  async insertProfile(profileData, env) {
    const stmt = env.profile_db.prepare(`
      INSERT INTO profiles (
        subdomain,
        full_name,
        name,
        position,
        intro,
        company_bold,
        company_role,
        company_address,
        phone,
        location,
        language,
        plan,
        theme_color,
        accent_effect,
        font_family,
        layout_style,
        socials_email,
        socials_facebook,
        socials_zalo,
        socials_linkedin,
        socials_instagram,
        socials_tiktok,
        socials_youtube,
        company_website,
        company_email,
        verified_account,
        identity_verified,
        id_type,
        id_verified_at,
        identity_note,
        view_count,
        click_count,
        last_updated
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16,
                ?17, ?18, ?19, ?20, ?21, ?22, ?23, ?24, ?25, ?26, ?27, ?28, ?29, ?30, ?31, ?32, datetime('now'))
    `);

    await stmt
      .bind(
        profileData.subdomain,
        profileData.full_name || "",
        profileData.name || "",
        profileData.position || "",
        profileData.intro || "",
        profileData.company_bold || "",
        profileData.company_role || "",
        profileData.company_address || "",
        profileData.phone || "",
        profileData.location || "",
        profileData.language || "",
        profileData.plan || "BASIC",
        profileData.theme_color || "#ff72c6",
        profileData.accent_effect || "glass",
        profileData.font_family || "Inter",
        profileData.layout_style || "modern",
        profileData.socials_email || "",
        profileData.socials_facebook || "",
        profileData.socials_zalo || "",
        profileData.socials_linkedin || "",
        profileData.socials_instagram || "",
        profileData.socials_tiktok || "",
        profileData.socials_youtube || "",
        profileData.company_website || "",
        profileData.company_email || "",
        profileData.verified_account ? 1 : 0,
        profileData.identity_verified ? 1 : 0,
        profileData.id_type || "",
        profileData.id_verified_at || "",
        profileData.identity_note || "",
        0, // view_count
        0  // click_count
      )
      .run();
  },

  /**
   * Cập nhật trường `image` hoặc `cover` sau khi upload lên R2
   * @param {string} subdomain
   * @param {string} field - "image" hoặc "cover"
   * @param {string} url - Link ảnh CDN
   * @param {object} env
   */
  async updateImage(subdomain, field, url, env) {
    if (!["image", "cover"].includes(field)) {
      throw new Error("Field không hợp lệ, chỉ cho phép 'image' hoặc 'cover'");
    }

    await env.profile_db
      .prepare(
        `UPDATE profiles SET ${field} = ?, last_updated = datetime('now')
         WHERE subdomain = ?`
      )
      .bind(url, subdomain)
      .run();
  },
};

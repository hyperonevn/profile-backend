// /src/index.js
import { loadProfile } from "./routes/loadProfile.js";

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const hostParts = url.hostname.split(".");

      // ✅ Lấy subdomain
      const subdomain = hostParts.length > 2 ? hostParts[0] : "home";

      // ✅ Kiểm tra binding D1 trước khi gọi
      if (!env.profile_db) {
        return new Response(
          "⚠️ Lỗi cấu hình: env.profile_db không tồn tại. Kiểm tra binding trong wrangler.toml.",
          { status: 500, headers: { "content-type": "text/plain; charset=UTF-8" } }
        );
      }

      // ✅ Gọi router xử lý chính
      return await loadProfile(request, env, subdomain);

    } catch (error) {
      console.error("🔥 Worker Error:", error);
      return new Response(
        `Lỗi hệ thống: ${error.message}`,
        { status: 500, headers: { "content-type": "text/plain; charset=UTF-8" } }
      );
    }
  },
};

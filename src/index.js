// /src/index.js
import { loadProfile } from "./routes/loadProfile.js";

export default {
  /**
   * Cloudflare Worker entrypoint
   * Tự động nhận request và render trang profile theo subdomain
   */
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const hostParts = url.hostname.split(".");

      // ✅ Xử lý subdomain an toàn
      // Nếu là dạng "luminhtri.profile.io.vn" → subdomain = "luminhtri"
      // Nếu là "profile.io.vn" (không có subdomain) → fallback = "home"
      const subdomain = hostParts.length > 2 ? hostParts[0] : "home";

      // ✅ Gọi router loadProfile và truyền env, subdomain
      return await loadProfile(request, env, subdomain);
    } catch (error) {
      // ✅ Bắt lỗi phòng trường hợp Worker crash
      return new Response(
        `Lỗi hệ thống: ${error.message}`,
        { status: 500, headers: { "content-type": "text/plain; charset=UTF-8" } }
      );
    }
  },
};

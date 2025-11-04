import { Router } from "itty-router";
import { dbClient } from "../utils/dbClient.js";

const router = Router();

/**
 * API: POST /save
 * Mục đích: Thêm mới hồ sơ người dùng vào D1 Database
 * Input: JSON body (application/json)
 */
router.post("/save", async (request, env) => {
  try {
    const data = await request.json();

    // ✅ Kiểm tra đầu vào cơ bản
    if (!data.subdomain) {
      return new Response(
        JSON.stringify({ success: false, message: "Thiếu subdomain" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Kiểm tra trùng subdomain
    const existing = await dbClient.getProfile(data.subdomain, env);
    if (existing) {
      return new Response(
        JSON.stringify({
          success: false,
          message: `Subdomain "${data.subdomain}" đã tồn tại.`,
        }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Gọi hàm insertProfile từ dbClient
    await dbClient.insertProfile(data, env);

    // ✅ Phản hồi thành công
    return new Response(
      JSON.stringify({
        success: true,
        message: `Đã tạo hồ sơ cho ${data.subdomain}`,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ Lỗi khi lưu hồ sơ:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: err.message || "Đã xảy ra lỗi không xác định",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});

export default router;

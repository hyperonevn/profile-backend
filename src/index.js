// /src/index.js
import { Router } from "itty-router";

// Import các route riêng
import { loadProfile } from "./routes/loadProfile.js";
import saveProfile from "./routes/saveProfile.js";
import uploadFile from "./routes/uploadFile.js";

const router = Router();

// ✅ Route kiểm tra đơn giản (GET /)
router.get("/", () => new Response("🚀 Profile Backend Worker đang hoạt động"));

// ✅ Route tạo mới hồ sơ (POST /save)
router.post("/save", async (request, env, ctx) => {
  return await saveProfile.handle(request, env, ctx);
});

// ✅ Route upload ảnh (POST /upload)
router.post("/upload", async (request, env, ctx) => {
  return await uploadFile.handle(request, env, ctx);
});

// ✅ Route động để hiển thị profile theo subdomain (*.profile.io.vn)
router.get("*", async (request, env) => {
  const url = new URL(request.url);
  const host = url.hostname; // ví dụ: luminhtri.profile.io.vn
  const subdomain = host.split(".")[0];

  // Gọi loadProfile để render HTML
  return await loadProfile(request, env, subdomain);
});

export default {
  fetch: (request, env, ctx) => router.handle(request, env, ctx),
};

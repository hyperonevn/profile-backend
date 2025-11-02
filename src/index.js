import { loadProfile } from "./routes/loadProfile.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostParts = url.hostname.split(".");
    const subdomain = hostParts[0] || "home";

    // Gọi luôn loadProfile → domain gốc cũng động
    return await loadProfile(request, env, subdomain);
  },
};

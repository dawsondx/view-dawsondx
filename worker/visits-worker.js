/**
 * 访问计数 API —— Cloudflare Worker + D1
 *
 * GET /  →  {"count": 1234}   原子自增并返回最新值
 *
 * 每次成功请求都计 1 次浏览（PV），刷新即 +1。
 */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

const worker = {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    if (request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405, headers: CORS });
    }

    try {
      const count = await env.DB.prepare(
        "INSERT INTO visits (id, count) VALUES ('total', 1) " +
          "ON CONFLICT(id) DO UPDATE SET count = count + 1 " +
          "RETURNING count"
      ).first("count");

      return Response.json(
        { count: count ?? 0 },
        { headers: { ...CORS, "Cache-Control": "no-store" } }
      );
    } catch (error) {
      console.error("visit counter failed", error);
      return Response.json(
        { error: "counter_unavailable" },
        { status: 500, headers: { ...CORS, "Cache-Control": "no-store" } }
      );
    }
  },
};

export default worker;

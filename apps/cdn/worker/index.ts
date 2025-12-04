export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare",
      });
    }

		// Serve static assets
		try {
			return await env.ASSETS.fetch(request);
		} catch (e) {
			return new Response(null, { status: 404 });
		}
  },
} satisfies ExportedHandler<Env>;

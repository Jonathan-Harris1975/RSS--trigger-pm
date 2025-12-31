export default {
  async scheduled(event, env, ctx) {
    const url = env.RSS_ENDPOINT;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trigger: "cron",
          timestamp: new Date().toISOString()
        })
      });

      console.log(`RSS Trigger Response: ${res.status}`);
    } catch (err) {
      console.error("RSS Trigger Error:", err);
    }
  }
};

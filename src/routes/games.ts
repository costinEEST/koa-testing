import Router from "koa-router";
// import type { Context } from "koa";
import { Context } from "koa";

const router = new Router();

router.post(`/games`, async (ctx: Context) => {
  try {
    const payload = ctx.request.body.game;
    ctx.status = 201;
    ctx.body = {
      games: Array.isArray(payload) ? [...payload] : [payload]
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;

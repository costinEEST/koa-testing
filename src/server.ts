import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import dotenv from "dotenv";

import healthCheckRoutes from "./routes/healthCheck";
import gamesRoutes from "./routes/games";

dotenv.config();

const app = new Koa();

const PORT = process.env.PORT;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(logger());

app.use(healthCheckRoutes.routes());
app.use(gamesRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;

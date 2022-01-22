import { Config } from "./types/interfaces";

export const config: Config = {
  port: process.env.PORT || "7654",
  redis: {
    host: process.env.REDIS__HOST || "0.0.0.0",
    port: process.env.REDIS__PORT ? parseInt(process.env.REDIS__PORT) : 6401
  }
};

// import { promisify } from "node:util";
import { promisify } from "util";
// import { createClient } from "redis";
const redis = require("redis");

import { Storage } from "../types/interfaces";

import { config } from "../config";

const client = redis.createClient(config.redis);

const rpush = promisify(client.rpush).bind(client);
const lrem = promisify(client.lrem).bind(client);
const lrange = promisify(client.lrange).bind(client);

export const redisStorage: Storage = {
  get: (list: string) => {
    return lrange(list, 0, -1)
      .then(val => val)
      .catch(e => []);
  },
  add: (list: string, name: string) => {
    return rpush(list, name)
      .then(val => val > 0)
      .catch(e => false);
  },
  remove: (list: string, name: string) => {
    return lrem(list, 0, name)
      .then(val => val > 0)
      .catch(e => false);
  }
};

import request from "supertest";

import server from "../../src/server";

afterEach(done => {
  server.close();
  done();
});

describe("routes/games", () => {
  const games = ["World of Warships", "Battlefield"];

  games.forEach((game: string) => {
    it(`should allow adding a game to the list - ${game}`, async () => {
      const response = await request(server)
        .post("/games")
        .send({ game });

      expect(response.status).toEqual(201);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual({
        games: [game]
      });
    });
  });
});

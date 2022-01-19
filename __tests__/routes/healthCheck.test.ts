import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach(done => {
  server.close();
  done();
});

describe("routes/healthCheck", () => {
  it("should pong", async () => {
    const { status, type, body: { data } = {} } = await request(server).get(
      "/ping"
    );
    expect(status).toEqual(200);
    expect(type).toEqual("application/json");
    expect(data).toEqual("pong");
  });
});

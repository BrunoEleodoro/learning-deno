import { Application, Router } from "./deps.ts";

const app = new Application({ port: 3000 });

// Middleware
app.use((ctx) => {
  ctx.cookies["user.session"] = "qwertz";
  delete ctx.cookies["user.session"];
  return;
});

app.get("/", (ctx) => {
  return { "hello": "world" };
});

app.post("/cadastrar", async (ctx) => {
  return ctx.req.body;
});

await app.run();

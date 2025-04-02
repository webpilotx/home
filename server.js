import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () =>
  console.log(`Server is listening on port ${PORT}`)
);

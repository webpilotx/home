import "dotenv/config";
import express from "express";

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));

export default app;

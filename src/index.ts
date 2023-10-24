import type { Express } from "express";
import express from "express";

const app: Express = express();
const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `[server]: Server is Running On the http://localhost:${PORT_NUMBER}`
  );
});

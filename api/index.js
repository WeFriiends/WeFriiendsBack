import express from "express";
import { createServer } from "http";

const app = express();

// all environments
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

createServer(app).listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

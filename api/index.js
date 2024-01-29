import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { createServer } from "http";

import authRouter from "./routes/auth.js";

const app = express();
app.use("/api/auth", authRouter);

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
  },
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: ["./api/routes/auth.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.set("port", process.env.PORT || 3000);
createServer(app).listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
  console.log("OpenAPI schema:");
  console.log(specs);
});

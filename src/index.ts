import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RouterConfig } from "./routes";
import morgan from "morgan";
require("dotenv").config();
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initialize();
    this.middlewares();
    this.routes();
  }

  initialize() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    RouterConfig.initializeRoutes();
  }

  middlewares() {
    this.app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/api", RouterConfig.router);
  }
}

const app = new App().app;
export default app;

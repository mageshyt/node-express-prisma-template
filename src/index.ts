import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RouterConfig } from "./routes";
import morgan from "morgan";
require("dotenv").config();

// App class to create and configure the Express application
class App {
  public app: express.Application;

  constructor() {
    // Create a new Express application
    this.app = express();
    // Initialize the application by setting up middleware and routes
    this.initialize();
    // Configure and set up middlewares
    this.middlewares();
    // Configure and set up routes
    this.routes();
  }

  // Method to initialize the application by setting up necessary configurations
  initialize() {
    // Parse incoming JSON data
    this.app.use(bodyParser.json());
    // Parse incoming URL-encoded data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // Initialize the routes by calling RouterConfig.initializeRoutes() method
    RouterConfig.initializeRoutes();
  }

  // Method to configure and set up middlewares
  middlewares() {
    // Enable Cross-Origin Resource Sharing (CORS) for all origins
    this.app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );

    // Parse incoming JSON data
    this.app.use(express.json());
    // Parse incoming URL-encoded data
    this.app.use(express.urlencoded({ extended: true }));

    // Use Morgan middleware for logging HTTP requests in development mode
    this.app.use(morgan("dev"));
  }

  // Method to configure and set up routes
  routes() {
    // Mount the RouterConfig.router under the "/api" base path
    this.app.use("/api", RouterConfig.router);
  }
}

// Create an instance of the App class and export the app for use in other modules
const app = new App().app;
export default app;

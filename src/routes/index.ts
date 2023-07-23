import { Router } from "express";
import testRoute from "./test.route";

// RouterConfig class that manages the routing configuration
export class RouterConfig {
  // Create a new Router instance to manage routes
  public static router: Router = Router();

  // Private method to define the routes and their handlers
  private static routes() {
    // Use the "test" route from the imported testRoute
    // The "/test" route will be handled by the testRoute.router
    RouterConfig.router.use("/test", testRoute.router);
  }

  // Public method to initialize the routes by calling the "routes" method
  public static initializeRoutes() {
    RouterConfig.routes();
  }
}

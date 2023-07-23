import { Router } from "express";
import testRoute from "./test.route";
export class RouterConfig {
  public static router: Router = Router();

  private static routes() {
    RouterConfig.router.use("/test", testRoute.router);
  }

  public static initializeRoutes() {
    RouterConfig.routes();
  }
}

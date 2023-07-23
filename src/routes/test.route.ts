import { Router } from "express";
import { TestController } from "../controllers/testController";
class TestRoute {
  public router: Router;
  private static instance: TestRoute;

  constructor(private auth_controller: TestController) {
    this.router = Router();
    this.routes();
  }
  public static getInstance(): TestRoute {
    if (!TestRoute.instance) {
      TestRoute.instance = new TestRoute(new TestController());
    }
    return TestRoute.instance;
  }
  routes() {
    this.router.get("/", this.auth_controller.test);
  }
}

export default TestRoute.getInstance();

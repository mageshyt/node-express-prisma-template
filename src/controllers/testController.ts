
export class TestController {
  constructor() {
    console.log("🐻  Test controller constructor");
  }

  public test = async (req: any, res: any) => {
    try {
      res.status(200).json({ message: "Test controller" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

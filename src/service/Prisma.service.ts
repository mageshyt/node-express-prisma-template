import { PrismaClient } from "@prisma/client";

class PrismaService {
  prisma: PrismaClient = new PrismaClient({
    errorFormat: "minimal",
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: ["query", "info", "warn"],
  });
}

export default PrismaService;

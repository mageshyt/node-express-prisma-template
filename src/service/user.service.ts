import PrismaService from "./Prisma.service";

class UserService extends PrismaService {
  // we extend the prisma service and use the prisma client here
  user = this.prisma.user;

  // we can also add custom methods here
  async findUserByEmail(email: string) {
    return await this.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}

import { prismaClient } from "../../prisma";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //verify if email exist
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User / password not found ");
    }

    //ver

    return { ok: true };
  }
}

export { AuthUserService };

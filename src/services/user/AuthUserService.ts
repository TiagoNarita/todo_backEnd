import { compare } from "bcryptjs";
import { prismaClient } from "../../prisma";
import { sign } from "jsonwebtoken";

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
      throw new Error("User / password incorrect ");
    }

    //verify password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User / password incorrect");
    }

    //generate a token JWT

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return { id: user.id, name: user.name, email: user.email, token };
  }
}

export { AuthUserService };

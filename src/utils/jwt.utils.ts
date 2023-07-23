import jwt, { Secret } from "jsonwebtoken";
import { Response } from "express";

type JwtType = {
  userId: string;
  role: string;
};

export const getJwt = ({ userId, role }: JwtType): string => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET_KEY as Secret, {
    expiresIn: "3d",
  });
};

export const verifyJwt = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
};

export const cookieToken = (user: any, res: Response): any => {
  const token = getJwt({ userId: user.id, role: user.user_type });

  const options = {
    expires: new Date(
      Date.now() + (process.env.JWT_COOKIE_EXPIRES as any) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  user.password = undefined;

  res.status(200).cookie("token", token, options).json({
    success: true,
    ok: true,
    token,
    user,
  });

  return user;
};

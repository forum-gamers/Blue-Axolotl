import { type JwtPayload, type Secret, verify, sign } from "jsonwebtoken";
import type { JWT } from "next-auth/jwt";
export const SECRET: Secret = process.env.SECRET as Secret;

export const createToken = (payload: object): string =>
  sign(payload, SECRET, { algorithm: "HS256" });

export const verifyToken = (token: string | any): JwtPayload => {
  const tokensValue = verify(token, SECRET, {
    algorithms: ["HS256"],
  }) as JwtPayload;
  return tokensValue;
};

export const customVerify = (
  token: string | undefined,
  secret: string | Buffer
): JwtPayload | string | JWT =>
  verify(token as string, secret, { algorithms: ["HS256"] });

export const customToken = (
  token: string | JWT,
  secret: string | Buffer
): string => sign(token as string, secret, { algorithm: "HS256" });

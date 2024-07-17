import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, resp: Response, next: NextFunction) {
  //receive token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return resp.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const {} = verify();
  } catch (err) {
    return resp.status(401).end();
  }
}

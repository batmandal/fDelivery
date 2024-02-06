import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  try {
    jwt.verify(authorization, "secret");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

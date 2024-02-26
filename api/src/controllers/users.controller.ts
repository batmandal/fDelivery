import { RequestHandler } from "express";
import { UserModel } from "../models";
// import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await UserModel.find({});

  res.json(users);
};

export const getUser: RequestHandler<{ payload: {} }> = async (req, res) => {
  // const { email } = req.params.payload as JwtPayload;

  // const { email } = authorization;

  const user = await UserModel.findOne();

  if (!user) {
    return res.status(401).json({
      message: "not found user",
    });
  }
  res.json(user);
};

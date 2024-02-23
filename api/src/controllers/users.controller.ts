import { RequestHandler } from "express";
import { UserModel } from "../models";

import jwt from "jsonwebtoken";

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await UserModel.find({});

  res.json(users);
};

// type Payload = {
//   name: String;
//   password: String;
//   Phone: Number;
//   email: String;
// };

export const getUser: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne(email);

  if (!user) {
    return res.status(401).json({
      message: "not found user",
    });
  }
  res.json(user);
};

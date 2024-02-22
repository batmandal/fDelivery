import { RequestHandler } from "express";
import { UserModel } from "../models";

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await UserModel.find({});

  res.json(users);
};
// export const getUser: RequestHandler = async (req, res) => {
//   const user = await UserModel.findOne();

//   res.json(user);
// };

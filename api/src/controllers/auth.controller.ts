import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import { UserModel } from "../models";

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  // const { authorization } = req.headers;
  const user = await UserModel.create({
    name,
    email,
    password,
  });
  return res.json(user);
};

export const logIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "iim hereglegch algo",
    });
  }

  // if (user.password !== password) {
  //   return res.status(401).json({ message: "wrong password" });
  // }

  const token = jwt.sign({ email }, "secret");
  return res.json({ token, message: "logged In successfully" });
};

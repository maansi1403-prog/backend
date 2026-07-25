import User from "./model/usermodel.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  const result = await User.find();
  res.json(result);
};

export const addUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  let newObj = {
    name,
    email,
    password,
  };

  const result = new User(newObj);

  result.save();

  res.json(result);
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });

    if (!exists) {
      return res.json("email id not found register now");
    }

    const samePass = await exists.comparePassword(password);

    console.log(samePass);

    if (!samePass) {
      return res.json("password not match");
    }

    const token=jwt.sign({ email,password})
    res.json("login successfully");
  } catch (error) {
    res.json({ message: "Databas error", error: error.message });
  }
};



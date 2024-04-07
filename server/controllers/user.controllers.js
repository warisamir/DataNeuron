import { User } from "../models/user.model.js";
import { object, string } from "yup";
import { failureResponse, successResponse } from "../utils/index.js";

export const userValidationSchema = object({
  name: string().required(),
  email: string().email(),
});

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    successResponse(req, res, users);
  } catch (error) {
    console.log(error);
    failureResponse(req, res);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return failureResponse(req, res, {}, "User not found", 404);
    }

    successResponse(req, res, user);
  } catch (error) {
    console.log(error);
    failureResponse(req, res);
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = await userValidationSchema.validate(req.body);
    const newUser = new User(userData);
    await newUser.save();
    successResponse(req, res, newUser, "User created successfully.", 201);
  } catch (error) {
    console.log(error);
    failureResponse(req, res, error?.errors);
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await userValidationSchema.validate(req.body);
    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    if (!updatedUser) {
      return failureResponse(req, res, {}, "User not found", 404);
    }

    successResponse(req, res, updatedUser, "User updated successfully");
  } catch (error) {
    console.log(error);
    failureResponse(req, res, error?.errors);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return failureResponse(req, res, {}, "User not found", 404);
    }

    successResponse(req, res, {}, "User deleted successfully", 204);
  } catch (error) {
    console.log(error);
    failureResponse(req, res);
  }
};

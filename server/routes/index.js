import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import { successResponse } from "../utils/index.js";
import { ApiLog } from "../models/apiLog.model.js";

const routers = express.Router();

routers.get("/users", getUsers);
routers.get("/users/:id", getUser);
routers.post("/users", createUser);
routers.put("/users/:id", updateUser);
routers.delete("/users/:id", deleteUser);

export const getApiLogs = async (req, res) => {
  // const postUserApi = await ApiLog.findOne({path: "/users/", method: "POST"});
  // const data = {
  //   getUserApiCount: 0,
  //   postUserApiCount: postUserApi.count,
  //   putUserApiCount: 0,
  // }
  const apiLogs = await ApiLog.find({path: {$regex: "/users", $options: 'i'}});
  successResponse(req, res, apiLogs);
};

routers.get("/api-logs", getApiLogs);

export default routers;

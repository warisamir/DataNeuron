import { ApiLog } from "../models/apiLog.model.js";

export const successResponse = (
  req,
  res,
  data = {},
  message = "",
  statusCode = 200
) => {
  return res
    .status(statusCode)
    .json({ success: true, data: data, message: message });
};

export const failureResponse = (
  req,
  res,
  data = {},
  message = "Internal server error!!!",
  statusCode = 500
) => {
  return res
    .status(statusCode)
    .json({ success: false, data: data, message: message });
};

export const apiLogMiddleware = async (req, res, next) => {
  const filter = { path: req.path, method: req.method };
  await ApiLog.findOneAndUpdate(
    filter,
    { ...filter, $inc: { count: 1 } },
    { upsert: true, new: true }
  );
  next();
};

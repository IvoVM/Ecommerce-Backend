import jwt from "jsonwebtoken";
import config from "../config";

export async function verifyToken(req, res, next) {
  // Get the token from the headers
  let authHeader = req.headers['authorization']
  let token = authHeader.split(' ')[1]

  // if does not exists a token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }

  // decode the token
  const decoded = await jwt.verify(token, config.secret);

  // save the token on request object to using on routes
  req.userId = decoded.id;

  // continue with the next function
  next();
}

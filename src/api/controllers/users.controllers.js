import { users } from "../db/users.js";

export const getUsers = (req, res) => {
  const { limit } = req.query;
  const usersLimited = limit ? users.slice(0, limit) : users;
  res.status(200).json(usersLimited);
};

import * as userService from "../../../../services/user";
import { auth, revokeToken } from "../../../../services/auth";

export const getUser = async (req, res) => {
  const info = {
    email: "123@123.com",
    first_name: "James",
    last_name: "Xu",
    password: "123",
  };
  const user = await userService.create(info);
  console.log(user);
  const result = { email: user?.email, name: user?.name };
  res.json({ user: result });
};

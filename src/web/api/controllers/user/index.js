import * as userService from "../../../../services/user";
import { auth, revokeToken } from "../../../../services/auth";
import randomize from "randomatic";
import { sendEmail, sendVerifyEmail } from "../../../../utils/email/index";

export const getUser = async (req, res) => {
  const info = {
    email: "kaiyis1@student.unimelb.edu.au",
    first_name: "James",
    last_name: "Xu",
    password: "123",
  };
  const verifyCode = randomize("Aa0!", 6);

  await sendVerifyEmail(info.email, verifyCode);
  const user = await userService.create(info);
  console.log(user);
  const result = { email: user?.email, name: user?.name };
  res.json({ user: result });
};

import * as userService from "../../../../services/user";
import * as veriCodeService from "../../../../services/vericode";
import { auth, revokeToken } from "../../../../services/auth";
import randomize from "randomatic";
import { sendEmail, sendVerifyEmail } from "../../../../utils/email/index";

export const registerUser = async (req, res) => {
  const data = req.body.data;
  const userDetails = data.userDetails;
  const authInfo = data.authInfo;

  console.log(`userDetails: ${data.userDetails} authInfo: ${data.authInfo}`);

  // data validation
  const userDetailSchema = Joi.object().keys({
    firstName: Joi.string().min(0).max(99).required(),
    lastName: Joi.string().min(0).max(99).required(),
  });

  const authInfoSchema = Joi.object().keys({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  const userDetailError = userDetailSchema.validate(userDetails).error;
  const authInfoError = authInfoSchema.validate(authInfo).error;

  if (!(userDetailError == null) || !(authInfoError == null)) {
    const errorMsg = userDetailError
      ? userDetailError.details[0].message
      : authInfoError.details[0].message;
    console.log(errorMsg);
    res.status(422).json({
      message: errorMsg,
      data: null,
    });
    return;
  }

  const verifyCode = randomize("Aa0!", 6);

  await veriCodeService.create(verifyCode, authInfo.email);

  await sendVerifyEmail(authInfo.email, verifyCode);
  res.status(200).json("Email sent");
};
// export const getUser = async (req, res) => {
//   const info = {
//     email: "kaiyis1@student.unimelb.edu.au",
//     first_name: "James",
//     last_name: "Xu",
//     password: "123",
//   };
//   const verifyCode = randomize("Aa0!", 6);

//   await sendVerifyEmail(info.email, verifyCode);
//   const user = await userService.create(info);
//   console.log(user);
//   const result = { email: user?.email, name: user?.name };
//   res.json({ user: result });
// };

export const getUser = async (req, res) => {
  if (req.user) {
    const user = await userService.readById(req.user._id);
    const result = { email: user?.email, name: user?.name };
    res.json({ user: result });
  } else {
    console.log(`no user requested`);
    return res.status(401).json({
      error: "Unauthorized",
      message: "No user requested",
    });
  }
};

export const getAllUser = async (_, res) => {
  const users = await userService.readAll();
  console.log("get all user!");
  res.json({ data: { users } });
};

export const updateUser = async (req, res) => {
  console.log(req.body);
  const newUser = await userService.update(req.user._id, req.body.userDetails);
  res.json({ newUser });
};

export const deleteUser = async (req, res) => {
  const newUser = await userService.deleteById({ userId: req.params.id });
  res.json({ data: { newUser } });
};

export const login = async (req, res) => {
  // const ip = req.ip.match(/\d+\.\d+\.\d+\.\d+/);
  console.log("IP:" + req.ip);
  // logger.debug('', req.body);
  console.log(req.body);
  if (!req.body.data) {
    console.log(`Authentication fail. `);
    return res.status(401).json({
      error: "Unauthorized",
      message: "Empty body",
    });
  }
  const { email, password } = req.body.data;
  const authResult = await auth({
    email: email,
    password: password,
  });
  console.log("--- User Authentication ---");
  if (authResult.token) {
    const user = authResult.user;
    console.log(
      `Authentication success. Email: ${email}, Token:${authResult.token}`
    );
    // res.cookie('token', '123456');
    // res.cookie('token', authResult.token, { httpOnly: true });

    return res
      .cookie("access_token", authResult.token)
      .status(200)
      .json({
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
          token: authResult.token,
        },
      });
  } else {
    // 401，Authorization Fail
    console.log(
      `Authentication fail. Email: ${email}, Password: ${password}, ErrorMessage: ${authResult.errorMessage}`
    );
    return res.status(401).json({
      error: "Unauthorized",
      message: authResult.errorMessage,
    });
  }
};

export const logout = async (req, res) => {
  console.log("--- User Router [passportAuth]---");
  try {
    // const token = req.cookies['access_token'];

    // logger.debug(usersRouterPath);
    // console.log(`token info: ${JSON.stringify(token)}`);
    console.log("logout: " + req.user._id);
    await revokeToken(req.user);
    res.status(200).json({ message: "Successfully logged out" });
  } catch (err) {
    return res.status(401).json({
      error: err,
    });
  }
};

export const verifyEmailAndCreateUser = async (req, res) => {
  const data = req.body.data;
  const userDetails = data.userDetails;
  const authInfo = data.authInfo;

  const { code } = req.body.data;

  const verifyCode = await veriCodeService.readByEmail(authInfo.email);

  if (code === verifyCode?.code) {
    //res.status(200).json('User Verified');
    const newUser = await userService.create({
      email: authInfo.email,
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      password: authInfo.password,
    });

    console.log(`newUser: ${newUser}`);
    if (newUser == null) {
      res.status(422).json({
        message: "failed to create user",
        data: null,
      });
      return;
    }

    res.json({ data: { user: newUser } });
  } else {
    console.log(`${code} does not match with ${verifyCode}`);
    return res.status(401).json({
      error: "Unauthorized",
      message: "The code does not match",
    });
  }
};

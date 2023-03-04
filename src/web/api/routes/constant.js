const root = "/api";

const getUserRouterPath = root + "/user";
const getAllUserRouterPath = root + "/users";
const updateUserRouterPath = root + "/user/update";
const loginRouterPath = root + "/login";
const logoutRouterPath = root + "/logout";
const registerRouterPath = root + "/register";
const verifyEmailAndCreateUser = root + "/register/verify";
const emailCheckPath = root + "/check/email";

const getReviewRouterPath = root + "/review";

export {
  getUserRouterPath,
  getAllUserRouterPath,
  updateUserRouterPath,
  loginRouterPath,
  logoutRouterPath,
  registerRouterPath,
  verifyEmailAndCreateUser,
  getReviewRouterPath,
  emailCheckPath,
};

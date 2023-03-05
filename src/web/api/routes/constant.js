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

const newFilePath = root + "/file/new";
const updateFilePath = root + "file/update";
const getAllFilePath = root + "file/all";
const analyzeFilePath = root + "file/analyze";

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
  newFilePath,
  updateFilePath,
  getAllFilePath,
  analyzeFilePath,
};

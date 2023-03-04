/* eslint-disable camelcase */
import { VeriCode } from "../../models";

export const create = async ({ code, user_id }) => {
  var userData = {
    code,
    user_id,
  };

  const veriCode = await VeriCode.create(userData);
  return veriCode;
};

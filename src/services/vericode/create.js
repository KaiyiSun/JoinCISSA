/* eslint-disable camelcase */
import { VeriCode } from "../../models";

export const create = async ({ code, email }) => {
  var userData = {
    code,
    email,
  };

  const veriCode = await VeriCode.create(userData);
  return veriCode;
};

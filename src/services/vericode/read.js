import { isNilOrEmpty } from "ramda-adjunct";
import { isMongoId } from "validator";
import { VeriCode } from "../../models";

export const readByUserId = async (user_id) => {
  const veriCode = await VeriCode.findOne({ user_id });

  if (isNilOrEmpty(veriCode)) {
    console.log(`Cannot find verification code with user id:  ${user_id}`);
    return undefined;
  }

  return veriCode;
};

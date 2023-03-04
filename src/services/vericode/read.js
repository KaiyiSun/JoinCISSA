import { isNilOrEmpty } from "ramda-adjunct";
import { isMongoId } from "validator";
import { VeriCode } from "../../models";

export const readByEmail = async (email) => {
  const veriCode = await VeriCode.findOne({ email });

  if (isNilOrEmpty(veriCode)) {
    console.log(`Cannot find verification code with email:  ${email}`);
    return undefined;
  }

  return veriCode;
};

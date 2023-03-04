/* eslint-disable complexity */
import { isNilOrEmpty } from "ramda-adjunct";
import { VeriCode } from "../../models";

export const update = async (email, props) => {
  const veriCode = await VeriCode.findOne({ email });
  if (isNilOrEmpty(veriCode)) {
    console.log(`Cannot find verification code with email: ${email}`);
    return undefined;
  }

  if (props.code) {
    user.code = props.code;
  }

  await veriCode.save();

  const updatedCode = await VeriCode.findOne({ email });

  return updatedCode;
};

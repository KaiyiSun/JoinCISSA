/* eslint-disable complexity */
import { isNilOrEmpty } from "ramda-adjunct";
import { VeriCode } from "../../models";

export const update = async (user_id, props) => {
  const veriCode = await VeriCode.findOne({ user_id });
  if (isNilOrEmpty(veriCode)) {
    console.log(`Cannot find verification code with user id: ${user_id}`);
    return undefined;
  }

  if (props.code) {
    user.code = props.code;
  }

  await veriCode.save();

  const updatedCode = await VeriCode.findOne({ user_id });

  return updatedCode;
};

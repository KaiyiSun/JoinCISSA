import { VeriCode } from "../../models";

export const deleteById = async ({ codeId }) => {
  console.log("received data: ", codeId, realDelete);

  const deletedVeriCode = await VeriCode.findByIdAndDelete(userId);
  console.log(
    `Deleted verification code by Id: ${codeId}, User: ${JSON.stringify(
      deletedVeriCode
    )}`
  );
  return deletedVeriCode;
};

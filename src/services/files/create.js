import { isNilOrEmpty } from "ramda-adjunct";
import { isMongoId } from "validator";
import { File } from "../../models";

// Create a single file
export const createFile = async ({
  title,
  file_Data,
  active = true,
  user_id,
}) => {
  var newFile = {
    name: title,
    file_data: file_Data,
    active,
    user_id,
    created_at: Date.now(),
    updated_at: null,
  };
  const file = await File.create(newFile);
  return file;
};

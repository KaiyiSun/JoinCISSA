import { isNilOrEmpty } from "ramda-adjunct";
import { isMongoId } from "validator";
import { File } from "../../models";

export const updateFileById = async (fileId, props) => {
  const file = await File.findById(fileId);

  if (isNilOrEmpty(file)) {
    console.log(`Cannot find file with id: ${fileId}`);
    return undefined;
  }

  if (props.active !== undefined) {
    file.active = props.active;
  }

  if (props.file_data) {
    file.file_data = props.file_data;
  }

  if (props.score) {
    file.score = props.score;
  }

  if (props.comment) {
    file.comment = props.comment;
  }

  await file.save();

  const updatedFile = await File.findById(fileId);

  return updatedFile;

  // const filter = fileId;
  // const update = newFile;
  // File.findOneAndUpdate(filter, update, { upsert: true }, function (err, doc) {
  //   if (err) return res.send(500, { error: err });
  //   return res.send("Succesfully saved.");
  // });
};

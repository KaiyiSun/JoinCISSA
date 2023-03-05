import e from "express";
import * as fileService from "../../../../services/files";

export const newFile = async (req, res) => {
  const data = req.body.data;

  const file = await fileService.create({
    title: data.title,
    file_Data: data.content,
    user_id: req.user._id,
  });

  console.log(`newFile: ${file}`);
  if (file == null) {
    res.status(422).json({
      message: "failed to create file",
      data: null,
    });
    return;
  }

  res.json({ data: file });
};

export const updateFile = async (req, res) => {
  const fileId = req.body?.fileId;
  const data = req.body?.data;
  if (fileId) {
    const updatedFile = await fileService.updateFileById(fileId, data);

    res.json({ updatedFile });
  } else {
    console.log(`no file requested`);
    return res.status(401).json({
      error: "wrong api format",
      message: "No file requested",
    });
  }
};

export const getAllFile = async (req, res) => {
  if (req.user) {
    const files = await fileService.readDocumentByUser(req.user._id);
    res.json({ files });
  } else {
    console.log(`no user requested`);
    return res.status(401).json({
      error: "Unauthorized",
      message: "No user requested",
    });
  }
};

export const analyzeFile = async (req, res) => {
  // call open api
  // update file with score and comment from open api
  // return score and comment
};

import { isNilOrEmpty } from "ramda-adjunct";
import { isMongoId } from "validator";
import { File } from "../../models";

// Retrieve a single document
export const readDocument = async (documentId) => {
  if (!isMongoId(`${documentId}`)) {
    console.log(`Invalid documentId ${documentId}`);
    return undefined;
  }

  if (!File.exist(documentId)) {
    console.log("Document cannot be found");
    return undefined;
  }
  const document = await File.findById(documentId);
  return document;
};

// Retrieving all documents from the user
export const readDocumentByUser = async (userId) => {
  if (!isMongoId(`${userId}`)) {
    console.log(`Invalid userId ${userId}`);
    return undefined;
  }

  const allDocuments = await File.find({ user_id: userId });

  if (isNilOrEmpty(allDocuments)) {
    console.log(`Cannot find documents with user id: ${userId}`);
    return undefined;
  }

  return allDocuments;
};

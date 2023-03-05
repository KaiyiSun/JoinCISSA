import { Schema, model } from "mongoose";

const fileSchema = new Schema(
  {
    name: {
      type: String,
    },
    file_data: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

export const File = model("File", fileSchema);

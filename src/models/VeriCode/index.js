import { Schema, model } from "mongoose";

const VeriCodeSchema = new Schema(
  {
    code: {
      type: String,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

export const VeriCode = model("VeriCode", VeriCodeSchema);

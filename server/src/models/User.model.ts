import { Schema, model } from "mongoose";
import { IUser } from "../config/interface";

const UserSchema: Schema = new Schema({
  id: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
  },
  furigana: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = model<IUser>("User", UserSchema);

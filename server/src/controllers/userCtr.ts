import { Request, Response } from "express";
import { IUser } from "../config/interface";
import { UserModel } from "./../models/User.model";

const userCtrl = {
  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = new UserModel({ ...req.body });

      if (!newUser) return res.status(400).json({ msg: "Invalid data" });

      await newUser.save();
      return res.status(200).json({ msg: { newUser } });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },

  // createUser : async (req: Request, res: Response): Promise<void> => {
  //   try {
  //       const body = req.body as Pick<IUser, 'name' | 'furigana' | 'address' | 'phoneNumber'>
  //       const user: IUser = new UserModel({
  //           name: body.name,
  //           furigana: body.furigana,
  //           address: body.address,
  //           phoneNumber: body.phoneNumber,
  //       })
  //       const newUser: IUser = await user.save()
  //       const allUsers: IUser[] = await UserModel.find()
  //       res.status(201).json({ message: "User has been added!!", user: body })
  //   } catch (error) {
  //       throw error
  //   }
  // },

  geaAllUser: async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find();

      if (!users) return res.status(400).json({ msg: "User not found" });

      res.status(200).json(users);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.query.id);
      if (!user) return res.status(400).json({ msg: "User not found" });
      res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);

      if (!user) return res.status(400).json({ msg: "User not found" });

      res.status(200).json({ msg: "Delete user success" });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
      if (!user) return res.status(400).json({ msg: "User not found" });
      return res.status(200).json({ msg: "Update user success" });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
export default userCtrl;

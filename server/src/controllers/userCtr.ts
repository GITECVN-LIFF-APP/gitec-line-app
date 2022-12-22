import { Request, Response } from 'express'
import { UserModel } from './../models/User.model'
const userCtrl = {
  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = new UserModel({ ...req.body })
      if (!newUser) return res.status(400).json({ msg: 'Invalid data' })

      await newUser.save()
      return res.status(200).json({ msg: 'Create user success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  geaAllUser: async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find()

      if (!users) return res.status(400).json({ msg: 'User not found' })

      res.status(200).json(users)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.query.id)
      if (!user) return res.status(400).json({ msg: 'User not found' })
      res.status(200).json(user)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)

      if (!user) return res.status(400).json({ msg: 'User not found' })

      res.status(200).json({ msg: 'Delete user success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body)
      if (!user) return res.status(400).json({ msg: 'User not found' })
      return res.status(200).json({ msg: 'Update user success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default userCtrl

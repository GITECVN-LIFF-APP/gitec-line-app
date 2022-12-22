import { Request, Response } from 'express'
import { CarModel } from '../models/Car.model'
const carCtrl = {
  createCar: async (req: Request, res: Response) => {
    try {
      const newCar = new CarModel({ ...req.body })
      if (!newCar) return res.status(400).json({ msg: 'Invalid data' })
      await newCar.save()
      return res.status(200).json({ msg: 'Add car success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getAllCar: async (req: Request, res: Response) => {
    try {
      const cars = await CarModel.find()
      if (!cars) return res.status(400).json({ msg: 'Car not found' })
      res.status(200).json(cars)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default carCtrl

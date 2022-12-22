import { Request, Response } from 'express'
import { GasStationModel } from './../models/GasStation.model'
const gasStationCtrl = {
  createGas: async (req: Request, res: Response) => {
    try {
      const newGas = new GasStationModel({ ...req.body })
      if (!newGas) return res.status(400).json({ msg: 'Invalid data' })

      await newGas.save()
      return res.status(200).json({ msg: 'Create gas success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getAllGas: async (req: Request, res: Response) => {
    try {
      const gas = await GasStationModel.find()
      if (!gas) return res.status(400).json({ msg: 'Gas not found' })
      res.status(200).json(gas)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default gasStationCtrl

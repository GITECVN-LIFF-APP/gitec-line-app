import { Request, Response } from 'express'
import { ServiceModel } from '../models/Service.model'
const serviceCtrl = {
  createService: async (req: Request, res: Response) => {
    try {
      const newService = new ServiceModel({ ...req.body })
      if (!newService) return res.status(400).json({ msg: 'Invalid data' })

      await newService.save()
      return res.status(200).json({ msg: 'Add service success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getAllService: async (req: Request, res: Response) => {
    try {
      const services = await ServiceModel.find()
      if (!services) return res.status(400).json({ msg: 'Service not found' })
      res.status(200).json(services)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default serviceCtrl

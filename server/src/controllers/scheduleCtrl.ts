import { ScheduleModel } from './../models/Schedule.model'
import { Request, Response } from 'express'
const scheduleCtrl = {
  createBooking: async (req: Request, res: Response) => {
    try {
      const newSchedule = new ScheduleModel({ ...req.body })
      if (!newSchedule) return res.status(400).json({ msg: 'Invalid data' })
      await newSchedule.save()
      return res.status(200).json({ msg: 'Create schedule success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getAllSchedule: async (req: Request, res: Response) => {
    try {
      const schedule = await ScheduleModel.find()
      if (!schedule) return res.status(400).json({ msg: 'Schedule not found' })
      res.status(200).json(schedule)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  updateSchedule: async (req: Request, res: Response) => {
    try {
      const schedule = await ScheduleModel.findByIdAndUpdate(
        req.params.id,
        req.body
      )
      if (!schedule) return res.status(400).json({ msg: 'Schedule not found' })
      return res.status(200).json({ msg: 'Update schedule success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  deleteSchedule: async (req: Request, res: Response) => {
    try {
      const schedule = await ScheduleModel.findByIdAndDelete(req.params.id)
      if (!schedule) return res.status(400).json({ msg: 'Schedule not found' })
      return res.status(200).json({ msg: 'Delete schedule success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default scheduleCtrl

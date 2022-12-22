import { CalendarModel } from './../models/Calendar.model'
import { Request, Response } from 'express'
import moment from 'moment'
const calendarCtrl = {
  getAllDate: async (req: Request, res: Response) => {
    try {
      const calendar = await CalendarModel.find()

      if (!calendar) return res.status(400).json({ msg: 'Calendar not found' })

      res.status(200).json(calendar)
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },

  createDayOff: async (req: Request, res: Response) => {
    try {
      const {
        serviceId,
        startDateTime,
        endDateTime,
        status,
        allDate,
        userId,
        gasStationId
      } = req.body
      const newCalendar = new CalendarModel({
        serviceId,
        startDateTime,
        endDateTime,
        status,
        allDate,
        userId,
        gasStationId
      })
      await newCalendar.save()
      return res.status(200).json({ msg: 'Create success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  updateCalendar: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const {
        serviceId,
        startDateTime,
        endDateTime,
        status,
        allDate,
        gasStationId
      } = req.body
      await CalendarModel.findOneAndUpdate(
        { _id: id },
        {
          serviceId,
          startDateTime,
          endDateTime,
          status,
          allDate,
          gasStationId
        }
      )
      return res.status(200).json({ msg: 'Update success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  },
  deleteCalendar: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      await CalendarModel.findOneAndUpdate(
        { _id: id },
        {
          deleteAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }
      )
      return res.status(200).json({ msg: 'Delete success' })
    } catch (error: any) {
      return res.status(500).json({ msg: error.message })
    }
  }
}
export default calendarCtrl

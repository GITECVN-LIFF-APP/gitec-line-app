import express from 'express'
import calendarCtrl from '../controllers/calendarCtr'

const router = express.Router()

router.get('/calendar', calendarCtrl.getAllDate)
router.post('/calendar', calendarCtrl.createDayOff)

router
  .route('/calendar/:id')
  .put(calendarCtrl.updateCalendar)
  .delete(calendarCtrl.deleteCalendar)

export default router

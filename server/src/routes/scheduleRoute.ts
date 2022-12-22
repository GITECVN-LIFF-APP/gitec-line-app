import express from 'express'
import scheduleCtrl from '../controllers/scheduleCtrl'

const router = express.Router()

router.get('/schedule', scheduleCtrl.getAllSchedule)
router.post('/schedule', scheduleCtrl.createBooking)

router
  .route('/schedule/:id')
  .put(scheduleCtrl.updateSchedule)
  .delete(scheduleCtrl.deleteSchedule)

export default router

import express from 'express'
import gasStationCtrl from '../controllers/gasStationCtr'

const router = express.Router()

router.post('/gas', gasStationCtrl.createGas)
router.get('/gas', gasStationCtrl.getAllGas)

export default router

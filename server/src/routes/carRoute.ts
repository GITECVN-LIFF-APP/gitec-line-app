import express from 'express'
import carCtrl from '../controllers/carCtrl'

const router = express.Router()

router.post('/car', carCtrl.createCar)
router.get('/car', carCtrl.getAllCar)

export default router

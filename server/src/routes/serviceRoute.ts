import express from 'express'
import carCtrl from '../controllers/carCtrl'
import serviceCtrl from '../controllers/serviceCtrl'

const router = express.Router()

router.post('/service', serviceCtrl.createService)
router.get('/service', serviceCtrl.getAllService)

export default router

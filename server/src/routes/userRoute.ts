import express from 'express'
import userCtrl from '../controllers/userCtr'

const router = express.Router()

router.post('/user', userCtrl.createUser)
router.get('/user', userCtrl.geaAllUser)
router
  .route('/user/:id')
  .get(userCtrl.getUser)
  .delete(userCtrl.deleteUser)
  .patch(userCtrl.updateUser)

export default router

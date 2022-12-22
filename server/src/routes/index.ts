import userRouter from './userRoute'
import calendarRouter from './calendarRoute'
import carRouter from './carRoute'
import serviceRouter from './serviceRoute'
import gasRouter from './gasStationRoute'
import scheduleRouter from './scheduleRoute'
const routes = [
  userRouter,
  calendarRouter,
  carRouter,
  serviceRouter,
  gasRouter,
  scheduleRouter
]

export default routes

// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Components
import NearBy from '@components/NearBy'

// Pages
import RegisTerCar from '@pages/registerCar'
import ConfirmInformation from '@pages/confirmInformation'
import Service from '@pages/service'
import ReservationSuccess from '@pages/reservationSuccess'
import Home from '@pages/home'
import GasStationPage from '@pages/gasStation'
import PickDateTime from '@pages/pickDateTime'
import Login from '@pages/login'
import UpdateInfoMember from '@pages/updateInfoMember'
import CarSelection from '@pages/carSelection'
import ReservationInformation from '@pages/reservationInformation'
import MyPage from '@components/MyPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/update-info-member' element={<UpdateInfoMember />} />
      <Route path='/index' element={<Home />} />
      <Route path='/register-car' element={<RegisTerCar />} />
      <Route path='/confirm-information' element={<ConfirmInformation />} />
      <Route path='/service' element={<Service />} />
      <Route path='/reservation' element={<ReservationSuccess />} />
      <Route path='/home' element={<Home />} />
      <Route path='/nearby' element={<NearBy />} />
      <Route path='/oil-change' element={<GasStationPage />} />
      <Route path='/pick-date-time' element={<PickDateTime />} />
      <Route path='/car-selection' element={<CarSelection />} />
      <Route path='/reservation-confirm' element={<ReservationInformation />} />
      <Route path='/reservation-success' element={<ReservationSuccess />} />
      <Route path='/mypage' element={<MyPage />} />
    </Routes>
  )
}

export default App

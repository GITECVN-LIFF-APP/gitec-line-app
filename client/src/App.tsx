// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Components
import NearBy from '@components/NearBy'

// Pages
import RegisTerCar from '@pages/registerCar'
import Create from '@Test/Create'
import Edit from '@Test/Edit'
import Home from '@Test/Home'
import Login from '@pages/login'
import ConfirmInformation from '@pages/confirmInformation'
import Service from '@pages/service'
import UpdateInfoMember from '@pages/updateInfoMember'
import MypageInfor from '@pages/mypageInfo'
import GasStation from '@pages/gasStation'
import PickDateTime from '@pages/pickDateTime'
import CarSelection from '@pages/carSelection'
import ReservationInfor from '@pages/reservationInformation'
import ReservationSuccess from '@pages/reservationSuccess'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/update-info-member' element={<UpdateInfoMember />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/index' element={<Home />} />
      <Route path='/register-car' element={<RegisTerCar />} />
      <Route path='/confirm-information' element={<ConfirmInformation />} />
      <Route path='/service' element={<Service />} />
      <Route path='/home' element={<Home />} />
      <Route path='/nearby' element={<NearBy />} />
      <Route path='/mypage' element={<MypageInfor />} />
      <Route path='/oil-change' element={<GasStation />} />
      <Route path='/pick-date-time' element={<PickDateTime />} />
      <Route path='/car-selection' element={<CarSelection />} />
      <Route path='/reservation-confirm' element={<ReservationInfor />} />
      <Route path='/reservation-success' element={<ReservationSuccess />} />
    </Routes>
  )
}


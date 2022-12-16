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
import ReservationSuccess from '@pages/reservationSuccess'
import Service from '@pages/service'
import UpdateInfoMember from '@pages/updateInfoMember'
import MypageInfor from '@pages/mypageInfo'
import GasStation from '@pages/gasStation'
import PickDateTime from '@pages/pickDateTime'
import CarSelection from '@pages/carSelection'
import RegisterMember from '@pages/registerMember'
import ReservationInformation from '@pages/reservationInformation'

// Contexts
import ServiceProvider from '@contexts/serviceContext'

function App() {
  return (
    <ServiceProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/update-info-member' element={<UpdateInfoMember />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/index' element={<Home />} />
        <Route path='/register-car' element={<RegisTerCar />} />
        <Route path='/confirm-information' element={<ConfirmInformation />} />
        <Route path='/service' element={<Service />} />
        <Route path='service/reservation-success' element={<ReservationSuccess />} />
        <Route path='/home' element={<Home />} />
        <Route path='/nearby' element={<NearBy />} />
        <Route path='/mypage' element={<MypageInfor />} />
        <Route path='service/oil-change' element={<GasStation />} />
        <Route path='service/pick-date-time' element={<PickDateTime />} />
        <Route path='service/car-selection' element={<CarSelection />} />
        <Route path='service/reservation-confirm' element={<ReservationInformation />} />
        <Route path='register-member' element={<RegisterMember />} />
      </Routes>
    </ServiceProvider>
  )
}

export default App

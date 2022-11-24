// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Pages
import RegisTerMember from '@pages/registerMember'
import RegisTerCar from '@pages/registerCar'
import ConfirmInformation from '@pages/confirmInformation'
import Service from '@pages/service'
import Calendar from '@components/Calendar'
import PickDateTime from '@pages/pickDateTime'

function App() {
  return (
    <Routes>
      <Route path='/register-member' element={<RegisTerMember />} />
      <Route path='/register-car' element={<RegisTerCar />} />
      <Route path='/confirm-information' element={<ConfirmInformation />} />
      <Route path='/service' element={<Service />} />
      <Route path='/pick-date-time' element={<PickDateTime />} />
    </Routes>
  )
}

export default App

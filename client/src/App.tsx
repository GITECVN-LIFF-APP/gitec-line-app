// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Pages
import RegisTerMember from '@pages/registerMember'
import RegisTerCar from '@pages/registerCar'

function App() {
  return (
    <Routes>
      <Route path='/register-member' element={<RegisTerMember />} />
      <Route path='/register-car' element={<RegisTerCar />} />
    </Routes>
  )
}

export default App

// Lib
import { Route, Routes } from 'react-router-dom'

// Styles
import './styles/index.css'

// Pages
import RegisTerMember from '@pages/registerMember'

function App() {
  return (
    <Routes>
      <Route path='/register-member' element={<RegisTerMember />} />
    </Routes>
  )
}

export default App

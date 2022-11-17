import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from '@pages/home'
import Selection from '@components/SelectionService'
import Map from '@components/NearBy'
import MyPage from '@components/MyPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Selection />} />      
      <Route path='/nearby' element={<Map />} /> 
      <Route path='/mypage' element={<MyPage />} /> 
    </Routes>
  )
}

export default App

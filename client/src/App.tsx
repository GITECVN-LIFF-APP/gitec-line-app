import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from '@pages/home'
import Selection from '@components/SelectionService'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/service' element={<Selection />} />      
    </Routes>
  )
}

export default App

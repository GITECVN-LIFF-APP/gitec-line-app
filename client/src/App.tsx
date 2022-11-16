import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from '@pages/home'
import Header from '@components/Header'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App

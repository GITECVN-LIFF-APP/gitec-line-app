import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React from 'react'
import './App.css'
import HomeIcon from '@mui/icons-material/Home'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonIcon from '@mui/icons-material/Person'


function App() {
  const [value, setValue] = React.useState(0)
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label='ホーム' icon={<HomeIcon />} />
        <BottomNavigationAction label='近くの店舗' icon={<LocationOnIcon />} />
        <BottomNavigationAction label='予約する' icon={<CalendarMonthIcon />} />
        <BottomNavigationAction label='マイベージ' icon={<PersonIcon />} />
        <BottomNavigationAction label='LINEへ戻る' />
      </BottomNavigation>
    </Box>
  )
}

export default App

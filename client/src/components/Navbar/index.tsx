// Lib
import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { calendar, homeIcon, nearBy, person, lineIcon } from '@assets'
import { Link } from 'react-router-dom'
import './index.css'

const commonStyles = {
  bgcolor: '#EB6115',
  border: '1px solid #EB6115',
  width: '89px',
  height: '89px',
  marginTop: '-40px',
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='up' in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar(props: Props) {
  return (
    <HideOnScroll {...props}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Box className='bottomnav' sx={{ width: '100%', height: 61, position: 'relative' }}>
          <Box sx={{ width: '100%', height: 61, position: 'absolute', bottom: 0 }}>
            <BottomNavigation showLabels>
              <BottomNavigationAction label='ホーム' icon={<img src={homeIcon} />} />

              <BottomNavigationAction
                label='近くの店舗'
                icon={<img src={nearBy} />}
              />
              <Box sx={{ ...commonStyles, borderRadius: '50%' }}>
                <BottomNavigationAction
                  style={{ marginTop: '15px', marginLeft: '3px', marginBottom: '5px' }}
                  icon={<img src={calendar} />}
                />
                <label style={{ color: 'white', marginLeft: '11px'}}>予約する</label>
              </Box>
              <BottomNavigationAction
                label='マイベージ'
                icon={<img src={person} />}
              />
              <BottomNavigationAction
                label='LINEへ戻る'
                icon={<img src={lineIcon} />}
              ></BottomNavigationAction>
            </BottomNavigation>
          </Box>
        </Box>
      </Paper>
    </HideOnScroll>
  )
}

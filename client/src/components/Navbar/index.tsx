// Lib
import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Link } from 'react-router-dom'

// Assets
import { calendar, homeIcon, nearBy, person, lineIcon } from '@assets'

interface NavbarProps {
  window?: () => Window
  children: React.ReactElement
}

const Navbar = ({ window, children }: NavbarProps) => {
  const commonStyles = {
    bgcolor: '#EB6115',
    border: '1px solid #EB6115',
    width: '89px',
    height: '89px',
    marginTop: '-40px',
  }

  const HideOnScroll = (props: NavbarProps) => {
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

  return (
    <HideOnScroll>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Box className='bottomnav' sx={{ width: '100%', position: 'relative' }}>
          <Box sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                label='ホーム'
                icon={<img src={homeIcon} />}
                component={Link}
                to={'/'}
              />
              <BottomNavigationAction
                label='近くの店舗'
                icon={<img src={nearBy} />}
                component={Link}
                to={'/nearby'}
              />
              <Box sx={{ ...commonStyles, borderRadius: '50%' }}>
                <BottomNavigationAction
                  style={{ marginTop: '15px', marginLeft: '3px', marginBottom: '5px' }}
                  icon={<img src={calendar} />}
                  component={Link}
                  to={'/service'}
                />
                <label style={{ color: 'white', marginLeft: '11px' }}>予約する</label>
              </Box>
              <BottomNavigationAction
                label='マイベージ'
                icon={<img src={person} />}
                component={Link}
                to={'/mypage'}
              />
              <BottomNavigationAction
                label='LINEへ戻る'
                icon={<img src={lineIcon} />}
                component={Link}
                to={'/'}
              />
            </BottomNavigation>
          </Box>
        </Box>
      </Paper>
    </HideOnScroll>
  )
}

export default Navbar

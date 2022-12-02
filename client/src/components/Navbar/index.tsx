// Lib
import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// Assets
import { calendar, homeIcon, nearBy, person, lineIcon, notosanjp } from '@assets'

interface NavbarProps {
  window?: () => Window
  children?: React.ReactElement
}

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP',
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans JP';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Noto Sans JP'), local('Noto Sans JP-Regular'), url(${notosanjp}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

const Navbar = ({ window, children }: NavbarProps) => {
  const [value, setValue] = useState(0)

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
        {children as React.ReactElement}
      </Slide>
    )
  }

  return (
    <HideOnScroll>
      <ThemeProvider theme={theme}>
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
                  className='nearby'
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
                  <p className='service' style={{ color: 'white', marginLeft: '11px' }}>予約する</p>
                </Box>
                <BottomNavigationAction
                  className='mypage'
                  label='マイベージ'
                  icon={<img src={person} />}
                  component={Link}
                  to={'/mypage'}
                />
                <BottomNavigationAction
                  className='exit'
                  label='LINEへ戻る'
                  icon={<img src={lineIcon} />}
                  component={Link}
                  to={'/'}
                />
              </BottomNavigation>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </HideOnScroll>
  )
}

export default Navbar

// Lib
import { Box } from '@mui/material'

// Assets
import { logo } from '@assets'

const Header = () => {
  return (
    <Box className='box' sx={{ width: '100%', height: 50 }}>
      <div className='logoapp'>
        <div className='imagelogo'>
          <img src={logo} />
        </div>
      </div>
    </Box>
  )
}

export default Header

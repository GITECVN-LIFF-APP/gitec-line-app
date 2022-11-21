// Lib
import { Box } from '@mui/material'

// Assets
import { logo } from '@assets'

// Styles
import { Image } from './styles'

const Header = () => {
  return (
    <Box className='box' sx={{ width: '100%', height: 50 }}>
      <div className='logoapp'>
        <Image>
          <img src={logo} />
        </Image>
      </div>
    </Box>
  )
}

export default Header

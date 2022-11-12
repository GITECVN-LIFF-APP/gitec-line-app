// Lib

import { Box } from '@mui/material'
import './index.css'

//Image
import logo from '../../../public/image/logo.png'

const Header = () => {
  return (
    <Box sx={{ width: '100%', height: 50 }}>
      <div className='logo'>
        <center>
          <img className='imglogo' src={logo} />
        </center>
      </div>
    </Box>
  )
}
export default Header

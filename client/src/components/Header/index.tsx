// Lib
import { Box } from '@mui/material'
import styled from 'styled-components'
//Image
import { logo } from '@assets'

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #f4f4f4;
`

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

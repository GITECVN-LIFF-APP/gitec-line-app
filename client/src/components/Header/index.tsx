// Lib
import { Box } from '@mui/material'
import styled from 'styled-components'
//Image
import { logo } from '@assets'

const Image = styled.div`
  background: #f4f4f4;
  display: flex;
  justify-content: center;
`

const Header = () => {
  return (
    <Box sx={{ width: '100%', height: 50 }}>
      <div className='logoapp'>
        <Image>
          <img src={logo} />
        </Image>
      </div>
    </Box>
  )
}
export default Header

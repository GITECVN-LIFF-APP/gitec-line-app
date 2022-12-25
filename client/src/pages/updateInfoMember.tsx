// Components
import Header from '@components/Header'
import RegisTerMember from '@components/MemberRegister'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

// Types
import { IMember } from 'types/member'
import { useLocation } from "react-router-dom";

const UpdateInfoMember = () => {
  
  const navigate = useNavigate()
  const location = useLocation();
  
  // get userId
  let lineId = location.state.lineId;
  console.log('lineId',lineId);
  
  const handleOnSubmitForm =async (value: IMember) => {
    const newObejct={...value,lineId:lineId}
    console.log('new',newObejct);
    
    await axios
      .post('https://sandy-halved-pleasure.glitch.me/users', newObejct)
      .then((res) => localStorage.setItem('userSession', JSON.stringify(res.data)))
      navigate('/register-car')
  }

  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <RegisTerMember onSubmit={handleOnSubmitForm} />               
      </div>
    </>
  )
}

export default UpdateInfoMember

// Components
import Header from '@components/Header'
import RegisTerMember from '@components/MemberRegister'
import axios from 'axios'

// Types
import { IMember } from 'types/member'

const UpdateInfoMember = () => {
  const handleOnSubmitForm = (value: IMember) => {
    console.log('value', value)
    axios.post('http://localhost:5000/api/user', value).then((res) => console.log(res.data))
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

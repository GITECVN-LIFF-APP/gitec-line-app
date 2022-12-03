// Components
import Header from '@components/Header'
import RegisTerMember from '@components/MemberRegister'

// Types
import { IMember } from 'types/member'

const UpdateInfoMember = () => {
  const handleOnSubmitForm = (value: IMember) => {
    console.log('value', value)
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

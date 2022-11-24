// Assets
import { user } from '@assets'

const CardHorizontalMember = () => {
  return (
    <>
      <div className='homepagecard'>
        <div className='content'>
          <div className='card'>
            <div className='firstinfo'>
              <img src={user} />
              <div className='profileinfo'>
                <p className='fw-bold mb-4'>オーナー</p>
                <p className='bio'>ジーアイテック太郎</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardHorizontalMember

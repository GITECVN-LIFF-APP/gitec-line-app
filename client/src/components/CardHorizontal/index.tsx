export type CardHorizontalProps = {
  image: string
  title: string
  description: string
}

const CardHorizontal = ({ image, title, description }: CardHorizontalProps) => {
  return (
    <div className='homepage-card'>
      <div className='content'>
        <div className='card'>
          <div className='first-info'>
            <img src={image} />
            <div className='profile-info'>
              <p className='fw-bold mb-4'>{title}</p>
              <p className='bio'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardHorizontal

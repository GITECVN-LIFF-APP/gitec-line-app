export type CardHorizontalProps = {
  image: string
  textTitle: string
  description: string
}


const CardHorizontal = ({image, text, description}:CardHorizontalProps) => {
  return (
    <>
      <div className='homepagecard'>
        <div className='content'>
          <div className='card'>
            <div className='firstinfo'>
              <img src={image} />
              <div className='profileinfo'>
                <p className='fw-bold mb-4'>{text}</p>
                <p className='bio'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardHorizontal

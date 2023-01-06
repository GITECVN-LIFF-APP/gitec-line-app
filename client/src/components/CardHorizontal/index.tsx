export type CardHorizontalProps = {
  image: string
  title: string
  description: string
}

const CardHorizontal = ({ image, title, description }: CardHorizontalProps) => {
  return (
    // <div className='homepage-card'>
    //   <div className='content'>
    //     <div className='card'>
    //       <div className='first-info'>
    //         <img src={image} />
    //         <div className='profile-info'>
    //           <p className='fw-bold mb-4'>{title}</p>
    //           <p className='bio'>{description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='row card-horizontal mb-4'>
      <div className='p-2 col-3 ms-3'>
        <img src={image} className='img-fluid rounded-start' alt='...' />
      </div>
      <div className='col-8 align-items-center'>
        <h4 className='card-title mx-3 mt-4 fw-semibold'>{title}</h4>
        <p className='card-title mx-3'>{description}</p>
      </div>
    </div>
  )
}
export default CardHorizontal

// Lib
import { useContext } from 'react'

// Components
import Header from '@components/Header'
import Navbar from '@components/Navbar'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'
import { IserviceDB } from 'types/service'
import useSWR from 'swr'
import ServiceComponent from '@components/Service'
import { fetcher } from '@constants/fetch'
import { washCar } from '@assets'

const Service = () => {
  const { setNameService, setIdCustomer } = useContext(ServiceContext)

  const handleGetNameService = (nameService: string) => {
    setIdCustomer('01')
    setNameService(nameService)
  }

  const { data: services, error } = useSWR<IserviceDB[]>(
    'https://sandy-halved-pleasure.glitch.me/service',
    fetcher,
  )

  console.log(services)
  console.log(error)

  if (!services) return <h1>処理中</h1>

  return (
    <>
      <Header />
      <div className='container mt-3'>
        <>
          <div>
            <h1>各種予約</h1>

            {services &&
              services.map((service: IserviceDB) => (
                <ServiceComponent
                  key={service.id}
                  onGetNameService={handleGetNameService}
                  source={service.source}
                  link={service.link}
                  nameService={service.name}
                  img={service.image}
                />
              ))}
          </div>
        </>
      </div>
      <Navbar />
    </>
  )
}

export default Service

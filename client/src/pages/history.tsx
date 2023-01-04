// Components
import Navbar from '@components/Navbar'
import Header from '@components/Header'
import History from '@components/History'
import HistoryInformation from '@components/HistoryInfomation'
import useSWR from 'swr'
import { fetcher } from '@constants/fetch'
import { IserviceDB } from 'types/service'


const Home = () => {
    const { data: services, error } = useSWR<IserviceDB[]>(
        'https://sandy-halved-pleasure.glitch.me/reservation',
        fetcher,
      )

      
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <History />
        <HistoryInformation title={''} content={''} />
      </div>
      <Navbar />
    </>
  )
}
export default Home
// Lib
import { useContext } from 'react'

// Components
import GasStation from '@components/GasStation'
import Header from '@components/Header'

// Contexts
import { ServiceContext } from '@contexts/serviceContext'
import { fetcher } from '@constants/fetch'
import useSWR from 'swr'
import { IGasStation } from 'types/gasStation'

const GasStationPage = () => {
  const { data: gasStations, error } = useSWR<IGasStation[]>(
    'https://sandy-halved-pleasure.glitch.me/gasstation',
    fetcher,
  )

  const { setGasStation, gasStation } = useContext(ServiceContext)

  const handleGetGasStation = (gasStation: IGasStation) => {
    setGasStation(gasStation)
  }

  if (!gasStations) return <h1>処理中</h1>
  return (
    <>
      <Header />
      <div className='container mt-3 mb-3'>
        <GasStation
          onGetGasStation={handleGetGasStation}
          gasStations={gasStations}
          gasStation={gasStation}
        />
      </div>
    </>
  )
}

export default GasStationPage

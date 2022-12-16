// Assets
import { oilChange, washCar, kerosene, pika, checkCar, loop } from '@assets'

// Components
import Service from '@components/Service'

export type SelectionServiceProps = {
  onGetNameService: (nameService: string) => void
}

const SelectionService = ({ onGetNameService }: SelectionServiceProps) => {
  return (
    <>
      <div>
        <h2>各種予約</h2>
        <Service
          onGetNameService={onGetNameService}
          img={oilChange}
          link='oil-change'
          nameService='オイル交換予約'
        />
        <Service
          onGetNameService={onGetNameService}
          img={washCar}
          link='wash-car'
          nameService='洗車予約'
        />
        <Service
          onGetNameService={onGetNameService}
          img={loop}
          link='tire-change'
          nameService='タイヤ交換予約'
        />
        <Service
          onGetNameService={onGetNameService}
          img={pika}
          link='pika'
          nameService='Keeperコーディング予約'
        />
        <Service
          onGetNameService={onGetNameService}
          img={checkCar}
          link='check-car'
          nameService='車検予約'
        />
        <Service
          onGetNameService={onGetNameService}
          img={kerosene}
          link='kero-sene'
          nameService='灯油予約'
        />
      </div>
    </>
  )
}

export default SelectionService

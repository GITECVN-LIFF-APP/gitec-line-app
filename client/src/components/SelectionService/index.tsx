// Assets
import { oilChange, washCar, kerosene, pika, checkCar, loop } from '@assets'

// Components
import Service from '@components/Service'
import { fetcher } from '@constants/fetch'
import { IService } from 'types/service'
import useSWR from 'swr'

export type SelectionServiceProps = {
  onGetNameService: (nameService: string) => void
}

const SelectionService = ({ onGetNameService }: SelectionServiceProps) => {
  const { data: services , error} = useSWR<IService[]>('https://sandy-halved-pleasure.glitch.me/service' , fetcher)
  console.log(1)
  console.log(services)
  console.log(error);
  

  if (!services) return <h1>処理中</h1>
  return (
    <></>
  )
}

export default SelectionService

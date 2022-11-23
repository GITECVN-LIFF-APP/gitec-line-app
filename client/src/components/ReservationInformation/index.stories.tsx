// Lib
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ReservationInformation from '@components/ReservationInformation'

export default {
  title: 'ReservationInformation',
  component: ReservationInformation,
}

export const ReservationInformationSample: Story = () => (
  <BrowserRouter>
    <ReservationInformation />
  </BrowserRouter>
)

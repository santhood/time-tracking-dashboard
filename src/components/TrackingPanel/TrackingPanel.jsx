import { useState } from 'preact/hooks'
import activities from '../../data/activities-data.json'
import UserCard from '../UserCard/UserCard'
import TrackingCard from '../TrackingCard/TrackingCard'
import './TrackingPanel.css'

export const TIME_FRAME = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
}

function TrackingPanel() {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAME.WEEKLY)

  return (
    <section class='tracking-panel'>
      <div class='tracking-panel__container'>
        <UserCard timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
        {activities.map(({ title, timeframes }) => (
          <TrackingCard
            title={title}
            current={timeframes[timeFrame].current}
            previous={timeframes[timeFrame].previous}
          />
        ))}
      </div>
    </section>
  )
}

export default TrackingPanel

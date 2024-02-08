import './UserCard.css'
import { TIME_FRAME } from '../TrackingPanel/TrackingPanel'

function UserCard({ timeFrame, setTimeFrame }) {
  return (
    <div class='user-card'>
      <div class='user-card__profile'>
        <picture>
          <img src='/images/image-jeremy.png' alt='User image' />
        </picture>
        <div>
          <span>Report for</span>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <nav class='user-card__nav'>
        <button
          type='button'
          class={timeFrame === TIME_FRAME.DAILY ? 'open' : ''}
          onClick={() => setTimeFrame(TIME_FRAME.DAILY)}
        >
          Daily
        </button>
        <button
          type='button'
          class={timeFrame === TIME_FRAME.WEEKLY ? 'open' : ''}
          onClick={() => setTimeFrame(TIME_FRAME.WEEKLY)}
        >
          Weekly
        </button>
        <button
          type='button'
          class={timeFrame === TIME_FRAME.MONTHLY ? 'open' : ''}
          onClick={() => setTimeFrame(TIME_FRAME.MONTHLY)}
        >
          Monthly
        </button>
      </nav>
    </div>
  )
}

export default UserCard

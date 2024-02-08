import './TrackingCard.css'

function TrackingCard({ title, current, previous }) {
  const lowercaseAndHyphen = (text) => {
    return text.toLowerCase().replace(' ', '-')
  }

  return (
    <div data-card={lowercaseAndHyphen(title)} class='tracking-card'>
      <picture class='tracking-card__picture'>
        <img
          src={`/images/icon-${lowercaseAndHyphen(title)}.svg`}
          alt={`Icon ${title}`}
        />
      </picture>
      <div class='tracking-card__info'>
        <h2>{title}</h2>
        <img src='/images/icon-ellipsis.svg' alt='Icon ellipsis' />
        <span class='current'>{current}hrs</span>
        <span class='previous'>Previous - {previous}hrs</span>
      </div>
    </div>
  )
}

export default TrackingCard

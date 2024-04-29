import StarIcon from '../assets/star-icon.png'
import UserIcon from '../assets/user-icon.png'
import '../styles/components/review-card.scss'
function ReviewCard() {
  const fiveStars = Array.from({ length: 5 }).map(index => (
    <img
      key={index}
      src={StarIcon}
    />
  ))
  return (
    <div className='review-card'>
      {fiveStars}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
        porttitor pellentesque. Nulla facilisi. Proin tempus nisl pellentesque
        odio porta, ut scelerisque arcu pellentesque.
      </p>
      <div className="profile">
        <img src={UserIcon} />
        <h4>John Doe</h4>
      </div>
    </div>
  )
}

export default ReviewCard
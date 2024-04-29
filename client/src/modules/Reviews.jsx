import ReviewCard from '../components/ReviewCard'

function Reviews() {
  const reviews = Array.from({ length: 3 }).map(index => (
    <ReviewCard key={index} />
  ))
  return (
    <div className='grey-bg'>
      <div id='reviews-section'>
        <h2>What our Customers say</h2>
        {reviews}
      </div>
    </div>
  )
}
export default Reviews

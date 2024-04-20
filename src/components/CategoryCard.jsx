import WhiteButton from "./WhiteButton"
import '../styles/components/category-card.scss'

function CategoryCard(props){
  return (
    <div className="category-card">
      <img src={props.img} />
      <WhiteButton text={props.text} />
    </div>
  )
}
export default CategoryCard
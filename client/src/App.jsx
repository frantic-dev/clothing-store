import CategoryCard from './components/CategoryCard'
import Hero from './components/Hero'
import WomanImg from './assets/woman-img.jpg'
import ManImg from './assets/man-img.jpg'
import HeadphonesImg from './assets/headphones-img.jpg'
import JewelryImg from './assets/jewelry-img.jpg'
import BestSeller from './modules/BestSeller'
import Reviews from './modules/Reviews'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.scrollTo({top:0, behavior: 'instant'})
  }, [])
  return (
    <div id='home-page'>
      <Hero />
      <div className='inner-container'>
        <h2>Shop by Categories</h2>
        <div id='category-cards'>
          <CategoryCard
            img={WomanImg}
            text="Women's clothing"
          />
          <CategoryCard
            img={ManImg}
            text="Men's clothing"
          />
          <CategoryCard
            img={JewelryImg}
            text='Jewelry'
          />
          <CategoryCard
            img={HeadphonesImg}
            text='Electronics'
          />
        </div>
        <BestSeller />
        <Reviews />
      </div>
    </div>
  )
}

export default App

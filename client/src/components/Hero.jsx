import heroImg from '../assets/hero-img.png'
import '../styles/components/hero.scss'

function Hero() {
  return (
    <div id='hero'>
      <div >
        <h2>Classic Exclusive</h2>
        <h1>Women&apos;s Collection</h1>
        <h2>UP TO 40% OFF</h2>
        <button>Shop Now -&gt;</button>
      </div>
      <img src={heroImg} />
    </div>
  )
}
export default Hero
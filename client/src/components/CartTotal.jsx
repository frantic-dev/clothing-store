import { useSelector } from "react-redux"

function CartTotal(){
  const cartTotal = useSelector(state => state.cartTotal)
  return <div>{cartTotal.toFixed(2)}$</div>
}

export default CartTotal
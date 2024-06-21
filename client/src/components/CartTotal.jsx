import { useSelector } from "react-redux"

function CartTotal(){
  const cartTotal = useSelector(state => state.cartTotal)
  return <div>{cartTotal}$</div>
}

export default CartTotal
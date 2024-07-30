import { useSelector } from "react-redux"
import OrderCard from "../components/OrderCard"

function OrdersPage() {
  const products = useSelector(state => state.products)
  return (
    <>
    <OrderCard product={products[12]} />
    <OrderCard product={products[0]} />
    <OrderCard product={products[18]} />
    </>
  )
}
export default OrdersPage
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ProductPage() {
  const {productId} = useParams()
  useEffect(() => {
    axios.get(`/api/products/${productId}`)
  })
  return (
    <div></div>
  )
}

export default ProductPage
import React from 'react'
import product from './product'

function Image() {
  return (
    <img src={product.image} alt={product.nom} style={{ width: "100%"}}  className="rounded-top-2 object-fit-cover" />
  )
}

export default Image

import React from 'react'
import product from './product'

function Image() {
  return (
    <img src={product.image} alt={product.nom} width={"100%"} height={250} className="rounded-top-2 object-fit-cover" />
  )
}

export default Image

import React from 'react'
import product from './product'

function Description() {
  return (
    <span className='my-2 fs-6'>
      {product.description}
    </span>
  )
}

export default Description

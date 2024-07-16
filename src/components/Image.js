import React from 'react'
import product from './product_data'

const Image = () => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

export default Image

'use client'

import React, { useState } from 'react'
import Quantity from './Quantity'
import ActionButtons from './ActionButtons'

const DetailsClint = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    console.log(total)
    console.log(quantity)
  return (
    <div>
      <Quantity product={product} chengQuantity = {setQuantity} setTotal = {setTotal}></Quantity>
      <ActionButtons product={product} qty={quantity} total = {total}/>
    </div>
  )
}

export default DetailsClint

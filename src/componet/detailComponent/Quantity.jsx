'use client'

import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { RxDividerHorizontal } from 'react-icons/rx'

const Quantity = ({product, chengQuantity, setTotal}) => {
    const [qty, setQty] = useState(1);
    

    const decrease = () => {
        if(qty > 1) {
            const newQty = qty - 1;
            setQty(newQty);
            chengQuantity(newQty)
        }
    }
    const increase = () => {
        const newQty = qty + 1;
        setQty(newQty);
        chengQuantity(newQty)
    }
    useEffect(()=> {
        const subTotal = (product.price * qty).toFixed(2)
        setTotal(subTotal)
    },[qty, product.price])
  return (
    <div className='space-y-3'>
      <h1 className='flex items-center'><span className='w-50 block uppercase'>Quantity :</span> 
      <div className='flex items-center border-2 border-[#5C1621] '>
        <button onClick={decrease}><RxDividerHorizontal className='m-1.5 '/></button> 
        <span className='px-3 border-l-2 border-r-2'>{qty}</span> 
        <button onClick={increase}><IoMdAdd className='m-1.5 '/></button>
      </div></h1>
      <h1 className='flex items-center gap-1'><span className='w-50 block uppercase'>Subtotal :</span>{product.currency}<span>{(product.price * qty).toFixed(2)}</span></h1>
    </div>
  )
}

export default Quantity

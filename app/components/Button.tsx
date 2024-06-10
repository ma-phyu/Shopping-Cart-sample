"use client"
import React, { useContext, useState } from 'react'
import Total, { TotalContext } from './Total'


const Button = () => {
    // const {inc, dec, count} = useContext(TotalContext)

    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if(count > 1) {

            setCount(count -1)
        }
    }

  return (
    <div className="inline-flex text-white text-center  bg-cyan-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium py-1 px-2 rounded-full border  text-sm ">
      <button onClick={handleDecrement} className="p-1">
        -
      </button>
      <span className="p-1">{count}</span>
      <button onClick={handleIncrement} className="p-1">
        +
      </button>
    </div>
  )
}

export default Button

"use client"
import { useState } from "react";
import Button from "../components/Button";

export default function Item({item,total, setTotal,onDelete}) {

  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(item.price)
   
 
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <div>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
        >
          <div className="flex gap-2 justify-center">
            <div>
              <img
                className="h-12 w-12  object-cover rounded "
                src="https://images.ctfassets.net/y3o17r8ia9qa/1JbOqbcOSiyGJfgwTOpzpD/936178fcecb27de1d85cc81a9e9a3318/_______________300637401_banner_____________________________________________________________________________________________.jpg?w=1000&q=90"
                alt=""
              />
            </div>
            <div className="text-sm md:text-lg place-content-center">
              <h4> {item.name}</h4>
              <h4>{item.price}</h4>
            </div>
          </div>
        </td>
        <td>{price}</td>
        <td className="px-6 py-4">
          <div className="inline-flex text-white text-center  bg-cyan-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium py-1 px-2 rounded-full border  text-sm ">
          <button onClick={() => {
            if(count>1){
              setCount((prev) => prev - 1)
              setPrice((count - 1) * item.price)
              setTotal(total-item.price)
            }
            }} className="p-1">
              -
            </button>
            <span className="p-1">{count}</span>
            <button onClick={() => {
              setCount((prev) => prev + 1)
              setPrice((count + 1) * item.price)
              setTotal(total+price)
            }} className="p-1">
              +
            </button>
          </div>
        </td>
        <td>
          <button onClick={handleDelete}>
            <svg
              className="w-3 h-3 text-black-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </td>
      </tr>
    </div>
  );
}

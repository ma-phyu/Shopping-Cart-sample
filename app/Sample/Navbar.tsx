'use client'
import { BiCart } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";
export const Navbar = () => {

  const [count, setCount] = useState(1)
  const [total, setTotal] = useState()



  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {

      setCount(count - 1)
    }
  }

  return (
    <>
      <body>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-1">
          <div className="max-w-screen-xl  flex flex-wrap justify-between items-center mx-auto w-full p-4">
            <div className="flex content-end text-2xl">
              < MdMenu />
            </div>
            <div>
              <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Shopping Cart
                </span>
              </a>
            </div>
            <div className="flex content text-2xl">
              <BiCart />
            </div>
          </div>
        </nav>

        <nav className="bg-cyan-500 dark:bg-gray-700 w-full overflow-x-auto ">
          <div className="max-w-full px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0  rtl:space-x-reverse text-sm justify-between items-center">
                <div className="flex items-center space-x-10">
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Juice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white  <p>
            {/* {total} */}
          </p> dark:text-white hover:underline"
                    >
                      Noodles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white hover:underline"
                    >
                      Food
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white hover:underline"
                    >
                      Appetizar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white hover:underline"
                    >
                      Set Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white hover:underline"
                    >
                      Traditional Food
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <div className="w-full px-5 mt-5 mb-2  flex flex-col lg-container ">
          <div className="text-xl  pt-5 pb-5  dark:text-white flex justify-center  border border-cyan-500">
            <div className="text-sm md:text-lg lg:text-xl ">

              <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="flex justify-center">
                  ORDER DETAILS
                </div>
                <div className="grid grid-cols-2 gap-7">
                  <div>Receipt No.</div>
                  <div>222222222222</div>
                </div>
                <div className="grid grid-cols-2 gap-7">
                  <div>Room No.</div>
                  <div>102 first floor</div>
                </div>
                <div className="grid grid-cols-2 gap-7">
                  <div>Check In Time</div>
                  <div>13:30</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 mb-2">
            <table className="w-full px-5 text-sm text-left rtl:text-right justify-items-center pt-4 pb-4 border border-cyan-500">
              <thead className="text-lg">
                <tr className="border-b  border-cyan-500">
                  <th scope="col" className="px-6 py-3 justify-self-auto">
                    <div className="flex justify-center text-sm md:text-lg">
                      <p>Product Description</p>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="text-sm md:text-lg"><p>QTY</p></div>
                  </th>
                  <th scope="col" className="px-6 py-3 "></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    <div className="flex gap-2 justify-center">
                      <div>
                        <img className="h-12 w-12  object-cover rounded " src="https://images.ctfassets.net/y3o17r8ia9qa/1JbOqbcOSiyGJfgwTOpzpD/936178fcecb27de1d85cc81a9e9a3318/_______________300637401_banner_____________________________________________________________________________________________.jpg?w=1000&q=90" alt="" />
                      </div>
                      <div className="text-sm md:text-lg place-content-center">
                        <h4> Humberger</h4>
                        <h4>1000 Ks</h4>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex text-white text-center  bg-cyan-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium py-1 px-2 rounded-full border  text-sm ">
                      <button onClick={handleDecrement} className="p-1">
                        -
                      </button>
                      <span className="p-1">{count}</span>
                      <button onClick={handleIncrement} className="p-1">
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="" >  <p>
                    </p>
                      <svg
                        className="w-3 h-3 text-black-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    <div className="flex gap-2 justify-center">
                      <div> 
                        <img className="h-12 w-12  object-cover rounded" src="https://images.ctfassets.net/y3o17r8ia9qa/1JbOqbcOSiyGJfgwTOpzpD/936178fcecb27de1d85cc81a9e9a3318/_______________300637401_banner_____________________________________________________________________________________________.jpg?w=1000&q=90" alt="" />
                      </div>
                      <div className="text-sm md:text-lg place-content-center">
                        <h4> Humberger</h4>
                        <h4>1000 Ks</h4>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button />
                  </td>
                  <td>
                    <div className="" >  <p>
                    </p>
                      <svg
                        className="w-3 h-3 text-black-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    <div className="flex gap-2 justify-center">
                      <div>
                        <img className="h-12 w-12  object-cover rounded" src="https://images.ctfassets.net/y3o17r8ia9qa/1JbOqbcOSiyGJfgwTOpzpD/936178fcecb27de1d85cc81a9e9a3318/_______________300637401_banner_____________________________________________________________________________________________.jpg?w=1000&q=90" alt="" />
                      </div>
                      <div className="text-sm md:text-lg place-content-center ">
                        <h4> Humberger</h4>
                        <h4>1000 Ks</h4>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Button />
                  </td>
                  <td>
                    <div className="" >
                      <svg
                        className="w-3 h-3 text-black-500  "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="  mt-5 mb-2">
            <div className="pt-4 pb-4 flex justify-center  border border-cyan-500 w-1500px md:max-xl:flex md:h-full md:w-48">

              <div className=" text-sm md:text-xl">
                <table className="">
                  <thead className="">
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <th scope="row" className="">
                      </th>
                      <td className="px-2 py-2 pr-5">
                        Sub Total:
                      </td>
                      <td className="px-2 py-2">
                        1000
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="">
                      </th>
                      <td className="px-2 py-2 pr-5">
                        Discount:
                      </td>
                      <td className="px-2 py-2">
                        (0)
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="">
                      </th>
                      <td className="px-2 py-2 pr-5">
                        Tax (Service Charges + Commerical Tax):
                      </td>
                      <td className="px-2 py-2">
                        500
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="">
                      </th>
                      <td className="px-2 py-2 pr-5">
                        Grand Total:
                      </td>
                      <td className="px-2 py-2">
                        1500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-3 ">
            <div className="flex justify-around  text-sm md:text-lg  ">
              <div className=" ">
                <button
                  type="button"
                  className="text-white sm min-w-32 bg-cyan-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                  Back to Menu
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-white min-w-32 bg-cyan-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

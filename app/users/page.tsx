import { BiCart } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { RxButton } from "react-icons/rx";



export default function Home() {
  return (
    <body>
      <nav className="bg-white border-gray-200 dark:bg-white">
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
          <div className="flex content-end text-xl">
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
                    className="text-white dark:text-white hover:underline"
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
      <div className=" m-5 mt-5 h-full max-h-80">
        <div className="flex justify-center items-center font-bold mb-5">
          <h1>YOUR SHOPPING BAG</h1>
        </div>
        <div className="">
          <table className="w-full ">
            <thead className="border-t border-cyan-500">
              <tr className="border-b  border-cyan-500">
                <th scope="col" className="px-3 py-3 ">
                  <div className="text-sm md:text-lg">
                    <p>Product Description</p>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div className="text-sm md:text-lg"><p>QTY</p></div>
                </th>
                <th scope="col" className="px-3 py-3 ">
                <div className="text-sm md:text-lg"><p>Price</p></div>
                </th>
                <th scope="col" className="px-3 py-3 ">
                  <div className="text-sm md:text-lg"><p>Total</p></div></th>
              </tr>
            </thead>
            <tbody className="border-t border-blue-400 mt-5">
              <tr className="">
                <td colSpan={4}>
                  <div className="m-10"><br /><br /><br /><br /><br /><br />
                    <div className="flex justify-center text-center text-lg ">
                      Your card id currently empty.<br />Please click Back to Menu and add items to check out
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 mb-1 "><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className="flex justify-around  text-sm md:text-lg  ">
            <div className=" md:w-10 md:h-5 sm:w-10">
              <button
                type="button"
                className="text-white text-sm min-w-32  bg-cyan-500 hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-2 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" >
                Back to Menu
              </button>
            </div>
            <div className="">
                <button type="button" className="text-cyan-500 min-w-32  hover:text-white border border-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-2 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-cyan-400 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-900">Send Order</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
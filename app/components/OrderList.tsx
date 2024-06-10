import React from "react";
import Image from "next/image";
import  { useState} from 'react';
interface Order {
    ordernumber: number;
    name: string;
    quantity: number;
    // status: string;
    price: string;
}

export const OrderList: React.FC<{ orders: Order[] }> = ({ orders }) => {
    
    return (

        <div className="container mx-auto p-4 min-h-screen md:min-h-0">


            <div className="grid grid-cols-1 gap-4">
                <div className="outline outline-1 outline-cyan-500"></div>
                <div className="flex flex-row items-center justify-between rounded-lg">
                    <p className="font-bold flex-1 text-center text-sm md:text-lg">Product Description</p>
                    <p className="font-bold flex-1 text-center text-sm md:text-lg">Quantity</p>
                    <p className="font-bold flex-1 text-center"></p>
                </div>
                <div className="outline outline-1 outline-cyan-500"></div>
                {orders.length === 0 ? (
                    <p className=" my-10 mx-12 text-center text-lg text-red-500">Currently there is no order with the value that you input.</p>
                ) : (
                    <div>
                        {orders.map((order, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center justify-between p-4 rounded-lg bg-white"
                            >
                                <div className="flex-1 flex items-center justify-center text-xs md:text-lg">
                                    <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt={order.name} className="w-10 h-10 md:w-12 md:h-12 mr-2 object-cover rounded" />
                                    <div>
                                        <p className="text-center">{order.name}</p>
                                        <p className="text-center">{order.price}</p>
                                    </div>
                                </div>

                                <p className="flex-1 text-center text-sm md:text-lg">{order.quantity}</p>
                                <div className="flex-1 flex justify-center">
                                <svg
                                            className="w-3 h-3 text-black-500 "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14">
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />    
                                        </svg>         
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>


        </div >
    );
};

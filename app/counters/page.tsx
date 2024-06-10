'use client';
import React, { useState,useEffect } from 'react';

import Item from '../components/Item'
interface Order {
  id: number,
  name: string;
  price: number;
}


function MyTable() {

  const [total, setTotal] = useState(0)

  const [orders, setOrders] = useState<Order[]>([
    { id: 101, name: 'Humberger', price: 2000 },
    { id: 201, name: 'Humberger', price: 1000 },
    { id: 301, name: 'Humberger', price: 2000 },
    { id: 401, name: 'Humberger', price: 2000 },
    { id: 501, name: 'Humberger', price: 500 },
    { id: 601, name: 'Humberger', price: 2000 },
  ]);
  const calculateTotalPrice = () => {
    const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [orders]);
 
  const deleteRow = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (

    <div>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(row => (
            <Item item={row} key={row.id} total={total} setTotal={setTotal}  onDelete={deleteRow}/>
          ))}
        </tbody>
      </table>
      <div>
          <p>Total Price: {total}</p>
      </div>
    </div>
  );
}

export default MyTable;

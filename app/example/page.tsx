// // "use client";
// import React from 'react';
// import { useState } from 'react';
// interface Order {
//   id: number,
//   name: string;
//   price: number;
// }
// function MyTable() {
//   // Step 1: Define state for orders
//   const [orders, setOrders] = useState([
//     { id: 101, name: 'Hamburger', price: 2000 },
//     { id: 201, name: 'Hamburger', price: 1000 },
//     { id: 301, name: 'Hamburger', price: 2000 },
//     { id: 401, name: 'Hamburger', price: 2000 },
//     { id: 501, name: 'Hamburger', price: 500 },
//     { id: 601, name: 'Hamburger', price: 2000 },
//   ]);

//   // Step 2: Function to delete a row
//   const deleteRow = (id) => {
//     const updatedOrders = orders.filter(order => order.id !== id);
//     setOrders(updatedOrders);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.name}</td>
//               <td>{order.price}</td>
//               <td>
//                 <button onClick={() => deleteRow(order.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MyTable;

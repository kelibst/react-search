import React from "react";
import { OrderInterface } from "../redux/reducers/orderReducer";


interface Props {
  orders: OrderInterface[];
}

const OrderTable: React.FC<Props> = (props) => {
  return (
    <table className="order_table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Type</th>
          <th>Item</th>
          <th>Category</th>
          <th
            className="px-4 py-
    py-2 border-r border-gray-500"
          >
            Description
          </th>
          <th>Status</th>
          <th>Created On</th>
          <th className="px-4 py-2">Pick Date</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((order, index) => (
          <tr
            key={order.orderId}
            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <td>{order.orderId}</td>
            <td>{order.type}</td>
            <td>{order.item}</td>
            <td>{order.category}</td>
            <td>{order.description}</td>
            <td>{order.status}</td>
            <td>{order.createdOn.toString()}</td>
            <td className="px-4 py-2">{order.pickDate.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
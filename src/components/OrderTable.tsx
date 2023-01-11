interface Order {
  orderId: number;
  customer: {
    name: string;
    email: string;
    shippingAddress: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  orderDate: Date;
  totalAmount: number;
  paymentMethod: string;
  shippingMethod: string;
  trackingNumber: string;
  status: string;
  shippingAddress: string;
  discounts: number;
}

interface Props {
  orders: Order[];
}

const OrderTable: React.FC<Props> = ({ orders }) => {
  return (
    <table id="orders-table" className="text-sm w-full border-collapse">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-2">Order ID</th>
          <th className="p-2">Customer</th>
          <th className="p-2">Items</th>
          <th className="p-2">Order Date</th>
          <th className="p-2">Total Amount</th>
          <th className="p-2">Payment Method</th>
          <th className="p-2">Shipping Method</th>
          <th className="p-2">Tracking Number</th>
          <th className="p-2">Status</th>
          <th className="p-2">Shipping Address</th>
          <th className="p-2">Discounts</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.orderId} className="text-center">
            <td className="p-2 border">{order.orderId}</td>
            <td className="p-2 border">{order.customer.name}</td>
            <td className="p-2 border">
              {order.items.map((item) => (
                <span key={item.name}>
                  {item.name} - {item.quantity} - {item.price}
                </span>
              ))}
            </td>
            <td className="p-2 border">{order.orderDate.toString()}</td>
            <td className="p-2 border">{order.totalAmount}</td>
            <td className="p-2 border">{order.paymentMethod}</td>
            <td className="p-2 border">{order.shippingMethod}</td>
            <td className="p-2 border">{order.trackingNumber}</td>
            <td className="p-2 border">{order.status}</td>
            <td className="p-2 border">{order.shippingAddress}</td>
            <td className="p-2 border">{order.discounts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
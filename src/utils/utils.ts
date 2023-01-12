import { OrderInterface } from "../redux/reducers/orderReducer";


const findOrdersById = (orders: OrderInterface[], ids: string[]) => {
    const result = orders.filter((order) => ids.includes(order.orderId.toString()));
    return result;
};

export { findOrdersById }
import { OrderInterface } from "../redux/reducers/orderReducer";


const findOrdersById = (orders: OrderInterface[], ids: string[]) => {
    const result = orders.filter((order) => ids.includes(order.orderId.toString()));
    return result;
};

const filterOrders = (
    orders: OrderInterface[],
    itemNumbers: string[],
    orderNumbers: string[],
    orderTypes: string[]
) => {
    let result: OrderInterface[] = [];
    if (itemNumbers.length > 0) {
        result = orders.filter((order) =>
            itemNumbers.includes(order.item.toString())
        );
    }
    if (orderNumbers.length > 0) {
        result = result.concat(
            orders.filter((order) =>
                orderNumbers.includes(order.orderId.toString())
            )
        );
    }
    if (orderTypes.length > 0) {
        result = result.concat(
            orders.filter((order) => orderTypes.includes(order.type))
        );
    }
    result = [...new Set(result)];
};

export { findOrdersById, filterOrders }
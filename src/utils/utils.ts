import { OrderInterface } from "../redux/reducers/orderReducer";


const findOrdersById = (orders: OrderInterface[], ids: string[]) => {
    const result = orders.filter((order) => ids.includes(order.orderId.toString()));
    return result;
};

const filterSearch = (
    orders: OrderInterface[],
    itemNumbers: string[],
    orderNumbers: string[],
    orderTypes: string[]
) => {
    console.log(orderTypes);

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
    return result = [...new Set(result)];
};


const ITEM_REGEX = /^\d{3}$/;
const ORDER_ID_REGEX = /^\d{3}$/;


export { findOrdersById, filterSearch, ITEM_REGEX, ORDER_ID_REGEX }
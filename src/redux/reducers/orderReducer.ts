import { createSlice } from "@reduxjs/toolkit";
import { rejects } from "assert";

export interface OrderInterface {
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

const initialState = {
    errorMsg: '',
    allOrders: [],
    filteredOrders: []
}


export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.allOrders = action.payload
        },
        setError: (state, action) => {
            state.errorMsg = action.payload
        },
        setFilteredOrders: (state, action) => {
            console.log(action, 'action');

            state.filteredOrders = action.payload
        }
    }
})

export const { setOrders, setError, setFilteredOrders } = orderSlice.actions
export default orderSlice.reducer

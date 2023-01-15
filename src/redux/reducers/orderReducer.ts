import { createSlice } from "@reduxjs/toolkit";

export interface OrderInterface {
    orderId: string;
    type: string;
    item: string;
    category: string;
    description: string;
    status: string;
    createdOn: Date;
    pickDate: Date;
}
export interface initialStateInterface {
    errorMsg: string,
    allOrders: OrderInterface[],
    filteredOrders: OrderInterface[],
    itemNumbers: string[],
    orderNumbers: string[],
    orderTypes: string[]
}
const initialState: initialStateInterface = {
    errorMsg: '',
    allOrders: [],
    filteredOrders: [],
    itemNumbers: [],
    orderNumbers: [],
    orderTypes: []
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
            state.filteredOrders = action.payload
        },
        setItemNumbers: (state, action) => {
            state.itemNumbers = action.payload
        },
        setOrderNumbers: (state, action) => {
            state.orderNumbers = action.payload
        },
        setOrderTypes: (state, action) => {
            state.orderTypes = action.payload
        }
    }
})

export const { setOrders, setError, setFilteredOrders, setItemNumbers, setOrderNumbers, setOrderTypes } = orderSlice.actions
export default orderSlice.reducer

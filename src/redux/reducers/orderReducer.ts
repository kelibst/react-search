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
const initialState = {
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

export const { setOrders, setError, setFilteredOrders, setItemNumbers, setOrderNumbers } = orderSlice.actions
export default orderSlice.reducer

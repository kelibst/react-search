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

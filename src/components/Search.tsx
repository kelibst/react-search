import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import {  setError, setOrders, setFilteredOrders } from '../redux/reducers/orderReducer'
import { RootState } from '../redux/store'
import { findOrdersById } from '../utils/utils'
import OrderTable from './OrderTable'

const Search = () => {
  const { allOrders, errorMsg, filteredOrders } = useSelector((state: RootState) => state.orders)
  const [itemNumbers, setItemNumbers] = useState<string[]>([])
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const searchByIdResult = findOrdersById(allOrders, itemNumbers);
    console.log('handlesubmit', searchByIdResult);
    dispatch(setFilteredOrders(searchByIdResult))
  }

  const getOrdersFromApi = () => async (dispatch: ThunkDispatch<RootState, void, any>) => {
    try {
       const res = await fetch("src/api/orders.json");
      const data = await res.json();
      //sets the entire data here
      dispatch(setOrders(data));

      //sets the allOrders as filtereddata here to enable us to display it in the table the first time
      dispatch(setFilteredOrders(data))
      // resets the error
       dispatch(setError(''));
    } catch (error) {
        dispatch(setError(error?.message));
    }
};

 
  console.log(filteredOrders, 'filtered')
  
  return (
    <>
      <div className="flex justify-between shadow items-center">
        <div>
          <h3>Item Search</h3>
          <p>0 items</p>
        </div>
        <div className="flex">
          <form className="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-sm outline-none"
              onChange={
                (e) => {
                  setItemNumbers(e.target.value.split(","))
                }
              }
            />
            <button>search</button>
          </form>
        </div>
      </div>
      <main className="flex flex-col w-full h-full items-center justify-center gap-2">
        {!allOrders.length && errorMsg.length < 1 ? (
          <>
            <strong className="text-2xl">What are you looking for?</strong>

            <p className="text-xs text-[#778FAB]">
              Get started by searching & filtering a few
            </p>
            <button
              className="bg-[#0C67A0] text-white text-sm py-2 px-10 rounded-sm"
              onClick={() => dispatch(getOrdersFromApi())}
            >
              Fetch data
            </button>
            <p className="text-xs text-[#778FAB]">or search for an item</p>
          </>
        ) : (
            <>{
              errorMsg?.length > 0 ? <p>{errorMsg}</p> :
              <OrderTable orders={filteredOrders} />}</>
        )}
      </main>
    </>
  )
}

export default Search

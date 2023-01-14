import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { setError, setOrders, setFilteredOrders, setItemNumbers } from '../redux/reducers/orderReducer'
import { RootState } from '../redux/store'
import { findOrdersById } from '../utils/utils'
import Modal from './Layout/FilterModal'
import OrderTable from './OrderTable'
import { BsBookmark, BsFilter, BsPlusLg, BsSearch } from "react-icons/bs";

const Search = () => {
  const { allOrders, errorMsg, filteredOrders, itemNumbers, orderNumbers } = useSelector((state: RootState) => state.orders)
  // const [itemNumbers, setItemNumbers] = useState<string[]>([])
  const [showFilter, setshowFilter] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent) => {
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
    } catch (error: any) {
      dispatch(setError(error?.message));
    }
  };

  return (
    <>
      <div className="flex justify-between shadow items-center px-4 py-2">
        <div>
          <h3 className="text-xl font-bold"> Item Search </h3>
          <p>  {filteredOrders.length} items  </p>
        </div>
        <div className="flex relative">
          <form className="relative left-8 " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Search by item # Order #'
              className="py-2 px-3 rounded sm:text-sm  border-2 outline-none"
              onChange={
                (e) => {
                  dispatch(setItemNumbers(e.target.value.split(",")))
                }
              }
            />
          </form>

          <div className="inset-y-0 flex gap-2 items-center">
            <button className="search-btn z-10">
              <BsSearch />
            </button>
           

            <button className="search-btn border ml-1 border-tertiary">
              <BsPlusLg />
            </button>
            
            
            <button className='search-btn'>
              <BsBookmark className="text-primary" />
            </button>

            <button className='search-btn' onClick={() => setshowFilter(true)}>
              <BsFilter className="text-primary text-xl" />
            </button><Modal {...{ showFilter, setshowFilter }} />
          </div>
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

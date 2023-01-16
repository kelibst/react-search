import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action, Dispatch } from 'redux';
import { setError, setOrders, setFilteredOrders, setItemNumbers } from '../redux/reducers/orderReducer'
import { RootState } from '../redux/store'
import { findOrdersById, ITEM_REGEX } from '../utils/utils'
import Modal from './Layout/FilterModal'
import OrderTable from './OrderTable'
import { BsBookmark, BsFilter, BsPlusLg, BsSearch } from "react-icons/bs";

const Search = () => {
  const { allOrders, errorMsg, filteredOrders, itemNumbers } = useSelector((state: RootState) => state.orders)
  const [showFilter, setshowFilter] = useState(false)
  const [isValidItem, setIsValidItem] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const dispatch = useDispatch<Dispatch<Action>>()



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (allOrders.length > 0) {
      const searchByIdResult = findOrdersById(allOrders, itemNumbers);
    if (searchByIdResult.length > 0) {
      dispatch(setFilteredOrders(searchByIdResult))
      dispatch(setError(''))
    } else {
      dispatch(setError("No result found!"))
    } 
    } else {
      alert('Fetch data before search!')
    }
    
  }

  return (
    <div>
      <div className="flex justify-between shadow items-center px-4 py-2">
        <div>
          <h3 className="text-xl font-bold"> Item Search </h3>
          <p>  {filteredOrders.length} items  </p>
        </div>
        <div className="flex relative">
          <form className="relative left-8"  onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Search by item # Order #'
              className="py-2 px-3 rounded sm:text-sm  border-2 outline-none"
              value={itemNumbers}
              onChange={(e) => {
                dispatch(setItemNumbers(e.target.value.split(",")));
                e.target.value.length && setIsValidItem(
                  ITEM_REGEX.test(itemNumbers[itemNumbers.length - 1] )
                );
              }}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
            {!isValidItem && isFocus && itemNumbers.length > 0 && (
              <p className="form-input-helper absolute text-red-500 text-xs">
                item must be at least 4 digits (Ex. 0001)
              </p>
            )}
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
      <div>
 <main className="h-auto gap-2 ">
        {!allOrders.length && errorMsg.length < 1 ? (
          <div className='flex flex-col gap-2 items-center justify-center h-[90vh]'>
            <strong className="text-2xl">What are you looking for?</strong>
            <p className="text-xs text-[#778FAB]">
              Get started by searching & filtering a few
            </p>
            <button
              className="bg-[#0C67A0] text-white text-sm py-2 px-10 rounded-sm"
              onClick={async () => {

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
              }}
            >
              Fetch data
            </button>
            <p className="text-xs text-[#778FAB]">or search for an item</p>
          </div>
        ) : (
          <>{
            errorMsg?.length > 0 ? <div className='flex text-3xl font-bold flex-col gap-2 items-center justify-center h-[90vh]'>{errorMsg}</div> :
              <OrderTable orders={filteredOrders} />}</>
        )}
      </main>
      </div>
    </div>
  )
}

export default Search

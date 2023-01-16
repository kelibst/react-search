import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { BiFilter } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilteredOrders, setOrderTypes, setItemNumbers, setOrderNumbers, setError } from '../../redux/reducers/orderReducer';
import { RootState } from '../../redux/store';
import { filterSearch, ITEM_REGEX } from '../../utils/utils';
import CheckBoxes from './CheckBoxes';

interface Props {
  showFilter: boolean;
  setshowFilter: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({ showFilter, setshowFilter }) => {
  const { allOrders, itemNumbers, orderNumbers, orderTypes } = useSelector((state: RootState) => state.orders)
  
  const dispatch = useDispatch()
  const formRef = useRef<HTMLFormElement>(null);
  const [isValidItem, setisValidItem] = useState(false)
  const [isItemInputFocus, setIsItemInputFocus] = useState(false)

  return createPortal(
    <div>
      {showFilter && (
        <div className="fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-75 z-40 flex justify-end" onClick={() => {
          setshowFilter(false)
        }}>
          <div onClick={(e) => {
            e.stopPropagation()
          }
          }>
            <div className="relative mx-auto my-0 max-w-sm bg-white h-screen m-2 z-50">
              <div className="flex flex-col">
                <div className="bg-gray-200 p-4 flex items-center justify-between">
                  <div className="icon-container"><BiFilter size={28} /></div>
                  <div className="flex flex-col">
                    <h6 className='text-sm font-bold px-2'>Set Parameters</h6>
                    <p className="text-xs px-2">9 parameters available</p>
                  </div>
                  <button onClick={() => {
                    formRef.current && formRef.current!.reset()
                    dispatch(setOrderNumbers([]));
                    dispatch(setItemNumbers([]))
                    dispatch(setOrderTypes([]))
                  }} className="side-btn underline hover:text-blue-500 pl-2 text-xs">Reset all</button>
                </div>
                <form className='p-4' ref={formRef} onSubmit={(e: React.FormEvent) => {
                  e.preventDefault()
                  if (allOrders.length > 0) {
                    const data = filterSearch(allOrders, itemNumbers, orderNumbers, orderTypes)
                    if (data.length > 0) {
                    dispatch(setFilteredOrders(data))
                    dispatch(setError(''))
                  }else {
                    dispatch(setError("No result found!"));
                  }      
                  } else {
                    alert("Fetch the data before trying to search!")
                  }
                 
                  
                }}>
                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Item</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text"
                      className="form-input border-2 h-28 mt-1 block w-full {isValidItem && 'border-red-500'}"
                      placeholder="Item ID (Ex: 0001)"
                      onChange={(e) => {
                        dispatch(setItemNumbers(e.target.value.split(",")));
                      setisValidItem(
                        ITEM_REGEX.test(itemNumbers[itemNumbers.length - 1])
                      );
                      }}
                    onFocus={() => setIsItemInputFocus(true)}
                    onBlur={() => setIsItemInputFocus(false)} />
                     {!isValidItem && isItemInputFocus && itemNumbers.length > 0 && (
                <p className="form-input-helper text-red-500 text-xs">
                  item must be at least 4 digits (Ex. 0001)
                </p>
              )}
                  </details>
                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Order #</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Order ID (Ex: 0001)"
                     onChange={(e) => {
                      dispatch(setOrderNumbers(e.target.value.split(","))) ;
                      setisValidItem(
                        ITEM_REGEX.test(orderNumbers[orderNumbers.length - 1])
                      );
                      }}
                    />
                  </details>

                  <CheckBoxes options={['Show All', 'CAO', 'EDF', 'SFO']} />

                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Category</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                  </details>

                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Status</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                  </details>

                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Created on</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                  </details>

                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Pick date</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                  </details>

                  <div className="absolute w-11/12  bottom-0 block">
                    <p className="lightGray text-primary py-2 px-4 float-left" onClick={(e) => {
                    }
                    }>Cancel</p>
                    <button type='submit' disabled={!isValidItem} className="bg-primary font-bold disabled:bg-gray-300 disabled:text-darkPrimary text-white py-2 px-4 hover:bg-blue-600 float-right">Apply</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>,
    document.body
  );
};


export default Modal

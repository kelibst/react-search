import { useState } from 'react';
import { createPortal } from 'react-dom';
import { BiFilter } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Props {
  showFilter: boolean;
  setshowFilter: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({ showFilter, setshowFilter }) => {
  const [isValidItem, setisValidItem] = useState(false)
  const [isValidOrder, setisValidOrder] = useState(false)
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
                    console.log('handle later')
                  }} className="side-btn underline hover:text-blue-500 pl-2 text-xs">Reset all</button>
                </div>
                <form className='p-4'>
                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Item</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Item ID (Ex: 0001)" />
                  </details>
                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Order #</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Order ID (Ex: 0001)" />
                  </details>

                  <details className='cursor-pointer details-container'>
                    <summary className='summary-det'><span className='font-bold'>Type</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                    <div className='pt-4'>
                      <input type="checkbox" id='checkall'  className="type-checkbox" />
                    <label htmlFor="checkall" className='ml-3 text-sm cursor-pointer'> Show all</label>
                    </div>

                    <div className='pt-4'>
                      <input type="checkbox" id='CAO' className="type-checkbox" />
                    <label htmlFor="CAO" className='ml-3 text-sm cursor-pointer'> CAO</label>
                    </div>

                    <div className='pt-4'>
                      <input type="checkbox" id='EDF' className="type-checkbox" />
                    <label htmlFor="EDF" className='ml-3 text-sm cursor-pointer'>EDF</label>
                    </div>    
                  </details>

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
                    <button className="lightGray text-primary py-2 px-4 float-left" onClick={() => setshowFilter(false)}>Cancel</button>
                    <button disabled={!isValidItem && !isValidOrder} className="bg-primary font-bold disabled:bg-gray-300 disabled:text-darkPrimary text-white py-2 px-4 hover:bg-blue-600 float-right">Apply</button>
                  </div>

                </form>
                {/* <button className="absolute top-0 right-0 m-2" onClick={() => setshowFilter(false)}>X</button> */}
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

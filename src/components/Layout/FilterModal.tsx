import { createPortal } from 'react-dom';
import { BiFilter } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Props {
  showFilter: boolean;
  setshowFilter: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({showFilter, setshowFilter}) => {
  return createPortal(
    <div>
      {showFilter && (
        <div className="fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-75 z-40 flex justify-end"  onClick={() => {
          setshowFilter(false)
        }}>
          <div  onClick={(e) => {
          e.stopPropagation()
        }
        }>
            <div className="relative mx-auto my-0 max-w-sm bg-white h-screen m-2 z-50">
              <div className="bg-gray-200 p-4 flex justify-between">
                <div className="icon-container"><BiFilter /></div>
                <div className="flex col">
                  <h6>Set Parameters</h6>
                  <p className="text-sm">9 parameters available</p>
                </div>
                <p className="side-btn">Reset all</p>
              </div>
              <form className='p-4'>
                <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Item</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>
              <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Order #</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>

                 <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Type</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>

                 <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Category</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>

                 <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Status</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>

                 <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Created on</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>

                 <details className='cursor-pointer details-container'>
                  <summary className='flex justify-between'><span>Pick date</span> <span className="ico-details"><FaAngleDown /></span> </summary>
                   <input type="text" className="form-input border-2 border-black h-28 mt-1 block w-full" placeholder="Placeholder text for Input 1" />
                </details>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
            </form>
            {/* <button className="absolute top-0 right-0 m-2" onClick={() => setshowFilter(false)}>X</button> */}
          </div>
          </div>
          </div>
      )}
     
    </div>,
    document.body
  );
};


export default Modal

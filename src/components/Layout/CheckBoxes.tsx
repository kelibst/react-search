import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setOrderTypes } from '../../redux/reducers/orderReducer';
import { RootState } from '../../redux/store';

interface CheckboxProps {
    options: string[];
}

const CheckBoxes: React.FC<CheckboxProps> = ({ options }) => {
    const dispatch = useDispatch()
    const { orderTypes } = useSelector((state: RootState) => state.orders)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            dispatch(setOrderTypes([...orderTypes, value]));
        } else {
            dispatch(setOrderTypes(orderTypes.filter((val) => val !== value)));
        }
    };
    return (
        <details className='cursor-pointer details-container'>
            <summary className='summary-det'><span className='font-bold'>Type</span> <span className="ico-details"><FaAngleDown /></span> </summary>
            {
                options.map((option) => (
                    <div key={option} className='pt-4'>
                        <label className='text-sm cursor-pointer'>
                            <input type="checkbox" value={option} id='checkall' checked={orderTypes.includes(option)} name="types-select" className="type-checkbox" onChange={handleChange} />
                            <span className="pl-3">{option}</span>
                        </label>
                    </div>
                ))
            }
        </details>
    )
}

export default CheckBoxes

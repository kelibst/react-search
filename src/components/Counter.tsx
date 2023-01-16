import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../redux/reducers/counterReducer";
import { RootState } from "../redux/store";

const Counter = () => {
   const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
};

export default Counter;


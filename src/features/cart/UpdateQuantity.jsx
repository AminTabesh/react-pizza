import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="rounded"
        onClick={() => {
          dispatch(decreaseItemQuantity(id));
        }}
      >
        -
      </Button>
      <span className='font-medium text-sm'>{currentQuantity}</span>
      <Button
        type="rounded"
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;

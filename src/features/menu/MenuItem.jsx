import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getItemQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateQuantity from '../cart/UpdateQuantity'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const itemQuantitiy = useSelector(getItemQuantity(id));
  const isInCart = itemQuantitiy > 0;
  const dispatch = useDispatch();

  function handleAdd() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAdd}>
              Add to cart
            </Button>
          )}
          {isInCart && (
            <div className='flex gap-3 sm:gap-8'>
              <UpdateQuantity id={id} currentQuantity={itemQuantitiy} />
              <DeleteItem id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

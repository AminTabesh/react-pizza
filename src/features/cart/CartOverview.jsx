import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const location = useLocation();
  const isInCart = location.pathname === '/cart';
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div
      className={`flex items-center bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base ${
        isInCart ? 'justify-center' : 'justify-between'
      }`}
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {totalCartQuantity === 1 && '1 pizza'}
          {totalCartQuantity > 1 && `${totalCartQuantity} pizzas`}
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      {!isInCart && <Link to="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;

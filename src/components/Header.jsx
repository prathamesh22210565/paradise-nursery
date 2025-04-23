import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import cartIcon from '/assets/images/cart-icon.png';

const Header = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1 className="logo"><Link to="/">Paradise Nursery</Link></h1>
      <nav>
        {location.pathname !== '/products' && <Link to="/products">Products</Link>}
        {location.pathname !== '/cart' && <Link to="/cart">Cart</Link>}
        <div className="cart-icon">
          <img src={cartIcon} alt="Cart" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;

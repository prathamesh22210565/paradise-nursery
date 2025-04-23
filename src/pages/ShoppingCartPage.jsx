import { useContext } from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/cart.css'; // for LandingPage

const ShoppingCartPage = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <main className="cart-page">
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-summary">
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
              <Link to="/products"><button className="btn">Continue Shopping</button></Link>
              <button className="btn">Checkout</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShoppingCartPage;

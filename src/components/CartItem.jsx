import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-thumb" />
      <div className="cart-details">
        <h4>{item.name}</h4>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="delete-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

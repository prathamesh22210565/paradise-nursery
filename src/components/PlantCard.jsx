import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const PlantCard = ({ plant }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;

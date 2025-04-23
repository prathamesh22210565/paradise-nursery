const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
    return (
      <div className="quantity-selector">
        <button onClick={onDecrease} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    );
  };
  
  export default QuantitySelector;
  
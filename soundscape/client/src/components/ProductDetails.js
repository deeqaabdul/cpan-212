// ProductDetails.js
import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to the cart.`);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <h2>{product.artist}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <p>Genre: {product.genre}</p>
        <p>Release Date: {product.releaseDate}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

"use client"

import products from '../../product.json';
import styles from '../styles/Products.module.css';
import { useCart } from '../context/CartContext';
import Notification from '../components/Notification';
import { useState } from 'react';

export default function Products() {
  const { setCartItemsCount } = useCart();
  const [notification, setNotification] = useState({ isVisible: false, message: '' });


  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } 
    else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItemsCount(cart);

    setNotification({ isVisible: true, message: `${product.name} added to cart!` });

    setTimeout(() => {
      setNotification({ isVisible: false, message: '' });
    }, 3000);
  };

  const updateCartItemsCount = (cartItems) => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemsCount(count);
  };

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p>₹{product.price}</p>
            <button className={styles.productButton} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Notification 
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification({ isVisible: false, message: '' })}
      />
    </div>
  );
}

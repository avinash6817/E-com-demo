"use client"

import { useState, useEffect } from 'react';
import styles from '../styles/Cart.module.css';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [showCoupons, setShowCoupons] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const { setCartItemsCount } = useCart();

  // Dummy coupon codes
  const coupons = {
    'SAVE10': 0.1,
    'SAVE20': 0.2,
  };

  const selectCoupon = (code) => {
    setCouponCode(code);
    setShowCoupons(false);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    updateCartItemsCount(storedCart);
  }, []);

  const updateCartItemsCount = (cartItems) => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemsCount(count);
  };

  const updateQuantity = (id, quantity) => {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, quantity) };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItemsCount(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItemsCount(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const applyCoupon = () => {
    if (coupons.hasOwnProperty(couponCode)) {
      setDiscount(coupons[couponCode]);
      setAppliedCoupon(couponCode);
    } 
    else {
      alert('Invalid coupon code');
    }
    setCouponCode('');
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discount);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartImage} />

              <div className={styles.cartContent}>
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>
                <div>
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className={styles.quantityInput}
                  />
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className={styles.couponSection}>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className={styles.couponInput}
            />
            <button 
              onClick={() => setShowCoupons(!showCoupons)} 
              className={styles.showCouponsButton}
            >
              ▼
            </button>
            <button onClick={applyCoupon} className={styles.applyCouponButton}>
              Apply Coupon
            </button>
          </div>

          {showCoupons && (
            <div className={styles.couponDropdown}>
              <p>Available Coupons:</p>
              <ul>
                {Object.entries(coupons).map(([code, discount]) => (
                  <li key={code} onClick = {() => selectCoupon(code)}>
                    {code} - {discount * 100}% off
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {appliedCoupon && (
            <p className={styles.appliedCoupon}>
              Coupon {appliedCoupon} applied: {discount * 100}% off
            </p>
          )}
          
          <div className={styles.total}>
            <h2>Subtotal : ₹{calculateSubtotal().toFixed(2)}</h2>
            <h2>Total : ₹{calculateTotal().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
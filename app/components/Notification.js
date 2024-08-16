import React from 'react';
import styles from '../styles/Notification.module.css';

const Notification = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.notification}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>×</button>
    </div>
  );
};

export default Notification;
// app/components/Popup.js
import React from 'react';
import styles from './modal.module.css'; // Create a CSS file for styling

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <p>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>Thanks</button>
      </div>
    </div>
  );
};

export default Popup;
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Popup from "../Component/Popup"; 
import style from "../home.module.css"; 

const QuestionBox = ({ question, movableOption, staticOption }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // Message to show in popup

  // Function to move the box
  const moveBox = () => {
    if (boxRef.current) {
      const container = boxRef.current.parentElement; 
      const containerRect = container.getBoundingClientRect();

      // Calculate maximum position for movement
      const maxWidth = containerRect.width - 250; // Max width for X
      const maxHeight = containerRect.height - 150; // Max height for Y

      // Generate random positions within the container bounds
      setPosition({
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
      });
    }
  };

  // Initial movement to place the box in a random position within the container
  useEffect(() => {
    moveBox();
  }, []);

  // Handle response from user
  const handleResponse = (response) => {
    if (response === "Yes") {
      const message = "Fantastic! You’ve just made a great decision! 👍";
      setPopupMessage(message);
      setShowPopup(true); // Show the popup for "Yes"
    } else {
      moveBox(); // Move the box when "No" is selected
    }
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <motion.div
        ref={boxRef}
        className={style.questionBox}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{ position: "absolute" }} // Position absolutely to move freely within the container
      >
        <p>{question}</p>
        <div className={style.buttons}>
          <button 
            className={style.button} 
            onClick={() => handleResponse("Yes")}
            aria-label="Select Yes"
          >
            {movableOption}
          </button>
          <button 
            className={style.button} 
            onClick={() => handleResponse("No")}
            aria-label="Select No"
          >
            {staticOption}
          </button>
        </div>
      </motion.div>

      {showPopup && (
        <Popup message={popupMessage} onClose={closePopup} /> // Show popup if needed
      )}
    </>
  );
};

export default QuestionBox;
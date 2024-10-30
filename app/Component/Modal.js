// app/components/Modal.js
import React, { useEffect, useState } from "react";
import styles from "./modal.module.css"; // Ensure to link the correct stylesheet

const Modal = ({ isOpen, onClose, link }) => {
    const [copyStatus, setCopyStatus] = useState(""); // State to track copy status

    const handleCopy = () => {
        if (navigator.clipboard) {
            // Use clipboard API if available
            navigator.clipboard.writeText(link).then(() => {
                setCopyStatus("Link copied to clipboard!"); // Update status message
            }).catch((err) => {
                console.error("Could not copy text: ", err);
                setCopyStatus("Failed to copy link."); // Update status message
            });
        } else {
            // Fallback method for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = link;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
                setCopyStatus("Link copied to clipboard!"); // Update status message
            } catch (err) {
                console.error("Fallback: Could not copy text: ", err);
                setCopyStatus("Failed to copy link."); // Update status message
            } finally {
                document.body.removeChild(textArea); // Cleanup
            }
        }
    };

    // Prevent scrolling in the background when the modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent background scroll
        } else {
            document.body.style.overflow = "unset"; // Allow scrolling
        }

        return () => {
            document.body.style.overflow = "unset"; // Cleanup on unmount
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h3 className={styles.modalTitle}>Share Your Question</h3>
                <p className={styles.modalLink}>{link}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.copyButton} onClick={handleCopy}>Copy Link</button>
                    <button className={styles.closeButton} onClick={onClose}>Close</button>
                </div>
                {copyStatus && <p className={styles.copyStatus}>{copyStatus}</p>} 
            </div>
        </div>
    );
};

export default Modal;
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../firebase"; // Import the Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import styles from "./create.module.css"; // Create a CSS file for styling
import Modal from "../Component/Modal"; // Import your modal component

const Create = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState(""); // First option (movable)
  const [option2, setOption2] = useState(""); // Second option (static)
  const [link, setLink] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleCreate = async () => {
    setLoading(true); // Start loading
    try {
      // Add a new document with a generated unique ID
      const docRef = await addDoc(collection(db, "questions"), {
        question: question,
        options: [option1, option2], // Store the two options
        createdAt: new Date().toISOString(),
      });

      // Generate a shareable link with the unique ID
      const link = `${window.location.origin}/question/${docRef.id}`;
      setLink(link);
      setIsModalOpen(true);
      setQuestion(""); // Clear the input
      setOption1(""); // Reset options
      setOption2(""); // Reset options
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className={styles.createPage}>
      <h3>Create a Question</h3>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        className={styles.textarea}
      />
      <h3>Options</h3>
      <input
        type="text"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
        placeholder="Option 1 (Static)"
        className={styles.optionInput}
      />
      <input
        type="text"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
        placeholder="Option 2 (Movable)"
        className={styles.optionInput}
      />
      <button
        className={styles.button}
        onClick={handleCreate}
        disabled={!question || !option1 || !option2 || loading} // Disable if loading
      >
        {loading ? "Creating..." : "Create Link"} {/* Display loading text */}
      </button>

      {/* Modal for sharing the link */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} link={link} />
    </div>
  );
};

export default Create;
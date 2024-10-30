// app/question/[question]/page.js

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as needed
import { notFound } from 'next/navigation';
import QuestionBox from '@/app/Component/QuestionBox';
import style from "./page.module.css"

const QuestionDetail = async ({ params }) => {
    const { question } = params; // Get the question ID from the URL

    // Fetch data from Firestore
    const postRef = doc(db, 'questions', question); // Adjust the collection name as necessary
    const postSnap = await getDoc(postRef);

    // Check if the document exists; if not, show a 404 page
    if (!postSnap.exists()) {
        notFound();
    }

    const post = postSnap.data(); // Get the data

    return (
        <div className={style.app}>
            <div className={style.container}>
                <h1></h1>
                <div className={style.questionContainer}>
                    <QuestionBox
                        question={post.question} // Use question field from fetched data
                        staticOption={post.options?.[1] || "No"} // Default to "No" if options are missing
                        movableOption={post.options?.[0] || "Yes"} // Default to "Yes" if options are missing
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionDetail;
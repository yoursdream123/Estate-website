import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ReviewContext = createContext();
const REVIEW_API = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/review";

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  // load reviews on mount
  useEffect(() => {
    axios.get(REVIEW_API).then((res) => setReviews(res.data));
  }, []);

  // add review
  const addReview = async (newReview) => {
    const res = await axios.post(REVIEW_API, newReview);
    setReviews((prev) => [...prev, res.data]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

// custom hook for easy usage
export const useReviews = () => useContext(ReviewContext);

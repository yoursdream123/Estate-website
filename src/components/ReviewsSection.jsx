/*
import React, { useEffect, useState } from "react";
import axios from "axios";

const REVIEW_API = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/review";

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(REVIEW_API).then((res) => setReviews(res.data));
  }, []);

  return (
    <div>
      <h2>What People Say</h2>
      <div>
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <h4>{r.nameReview}</h4>
              <p>{r.descReview}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewsSection;
*/




























































/*
import React from "react";
import { useReviews } from "../context/ReviewContext";

function ReviewsSection() {
  const { reviews } = useReviews();

  return (
    <div>
      <h2>What People Say</h2>
      <div>
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <h4>{r.nameReview}</h4>
              <p>{r.descReview}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewsSection;
*/
import React from "react";
import { useReviews } from "../context/ReviewContext";
import "./ReviewsSection.css"; // custom css file

function ReviewsSection() {
  const { reviews } = useReviews();

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">What People Say</h2>
      <div className="reviews-grid">
        {reviews.length > 0 ? (
          reviews.map((r) => (
            <div key={r.id} className="review-card">
              <p className="review-desc">{r.descReview}</p>
              <div className="review-footer">
                <h4 className="review-name">{r.nameReview}</h4>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewsSection;

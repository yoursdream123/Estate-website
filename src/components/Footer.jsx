/*
import React, { useEffect, useState } from "react";
import axios from "axios";

const REVIEW_API = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/review";

function Footer() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ nameReview: "", descReview: "" });

  useEffect(() => {
    axios.get(REVIEW_API).then((res) => setReviews(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(REVIEW_API, form);
    setReviews([...reviews, res.data]);
    setForm({ nameReview: "", descReview: "" });
  };

  return (
    <footer style={{ background: "#eee", padding: "20px", marginTop: "40px" }}>
      <p>Thanks for visiting</p>
      <p>Review your experience</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.nameReview}
          onChange={(e) => setForm({ ...form, nameReview: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Review"
          value={form.descReview}
          onChange={(e) => setForm({ ...form, descReview: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="reviews">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <h4>{r.nameReview}</h4>
            <p>{r.descReview}</p>
          </div>
        ))}
      </div>

      <p>© 2025 Your Website</p>
    </footer>
  );
}

export default Footer;
*/

















































/*
import React, { useState } from "react";
import axios from "axios";

const REVIEW_API = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/review";

function Footer() {
  const [form, setForm] = useState({ nameReview: "", descReview: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(REVIEW_API, form); // review MockAPI mein save hoga
    setForm({ nameReview: "", descReview: "" }); // form reset
  };

  return (
    <footer>
      <p>Thanks for visiting</p>
      <p>Review your experience</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.nameReview}
          onChange={(e) => setForm({ ...form, nameReview: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Review"
          value={form.descReview}
          onChange={(e) => setForm({ ...form, descReview: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <p>© 2025 Your Website</p>
    </footer>
  );
}

export default Footer;
*/





















































import React, { useState } from "react";
import { useReviews } from "../context/ReviewContext";
import './Footer.css'

function Footer() {
  const { addReview } = useReviews();
  const [form, setForm] = useState({ nameReview: "", descReview: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(form);
    setForm({ nameReview: "", descReview: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Thanks for visiting</h3>
        <p>We’d love to hear about your experience!</p>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            placeholder="Your Name"
            value={form.nameReview}
            onChange={(e) => setForm({ ...form, nameReview: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Review"
            value={form.descReview}
            onChange={(e) => setForm({ ...form, descReview: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2025 HM Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./RecentSale.css";

function RecentSale({ sales }) {
  return (
    <section className="recent-sale-section">
      <h2 className="recent-sale-title">Recent Sales</h2>
      <div className="recent-sale-grid">
        {sales.map((item) => (
          <div className="recent-sale-card" key={item.id}>
            <img src={item.image} alt={item.title} className="recent-sale-img" />
            <div className="recent-sale-content">
              <h3>{item.title}</h3>
              <p className="recent-sale-city">{item.city}</p>
              <p className="recent-sale-price">PKR {item.price}</p>
              <p className="recent-sale-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentSale;

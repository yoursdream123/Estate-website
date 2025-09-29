import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D"
          alt="About Us"
          className="abouturl"
        />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We provide a simple and open platform where anyone can freely list or
          explore properties without signup. Our goal is to make property
          browsing transparent, hassle-free, and community-driven. Sellers can
          easily showcase their homes, while buyers can discover their next
          dream property in just a few clicks.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;

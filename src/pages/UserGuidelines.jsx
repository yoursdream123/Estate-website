import React from "react";
import "./UserGuidelines.css";
import { FaHome, FaUserShield, FaExclamationTriangle, FaEdit, FaComments, FaPhoneAlt } from "react-icons/fa";

            

function UserGuidelines() {
  return (
    <div className="guidelines-container">
      {/* Hero Section */}
      <header className="guidelines-hero">
        <h1>User Guidelines</h1>
        <p>Stay Safe, Make Smart Choices</p>
      </header>

      {/* Introduction */}
      <section className="guidelines-section">
        <h2>Introduction</h2>
        <p>
          Welcome to our property platform. These guidelines are designed to help you
          use the website effectively and securely. Please read them carefully before
          making any decisions or posting properties.
        </p>
      </section>

      {/* How to Use */}
      <section className="guidelines-section">
        <h2>How to Use the Website</h2>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <FaUserShield className="icon" />
            <h3>Step 1</h3>
            <p>No signup required — freely explore properties, list your own, and share your reviews.</p>
          </div>
          <div className="guideline-card">
            <FaHome className="icon" />
            <h3>Step 2</h3>
            <p>you can freely list the property just by clicking on list your home button and filling the form with accurate data.</p>
          </div>
          <div className="guideline-card">
            <FaEdit className="icon" />
            <h3>Step 3</h3>
            <p>If you’ve sold your property, please email us to remove it from listings or move it to the Recent Sales section.</p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="guidelines-section warning">
        <h2><FaExclamationTriangle className="icon" /> Safety & Fraud Prevention</h2>
        <ul>
          <li>Do not transfer money without verifying the property in person.</li>
          <li>Meet sellers/buyers at safe and public locations.</li>
          <li>Check ownership and legal documents before any payment.</li>
          <li>We are not responsible for transactions between users.</li>
        </ul>
      </section>

      {/* Posting Guidelines */}
      <section className="guidelines-section">
        <h2>Posting Property Guidelines</h2>
        <ul>
          <li>Upload only real and clear photos of your property.</li>
          <li>Provide accurate information (price, location, status).</li>
          <li>No fake or misleading listings allowed.</li>
          <li>Spam or fraudulent posts will be removed immediately.</li>
        </ul>
      </section>

      {/* Reviews */}
      <section className="guidelines-section">
        <h2><FaComments className="icon" /> Reviews & Feedback</h2>
        <p>
          Please share honest feedback and avoid spam or offensive language.
          Reviews help us build a safe and trustworthy community.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="guidelines-section disclaimer">
        <h2>Disclaimer</h2>
        <p>
          This website acts as a platform for property listings only. We do not
          guarantee the authenticity of the listings, deals, or any monetary transactions.
          Users must verify all details independently before proceeding.
        </p>
      </section>

      {/* Contact */}
      <section className="guidelines-section contact">
        <h2><FaPhoneAlt className="icon" /> Contact & Support</h2>
        <p>
          If you notice any suspicious activity, please report to us immediately.
          We are here to ensure your safe experience.
        </p>
      </section>
    </div>
  );
}

export default UserGuidelines;

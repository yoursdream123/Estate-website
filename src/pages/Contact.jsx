import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to listen — share your questions, feedback, or suggestions.</p>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          This platform is completely <strong>open-source</strong> and built for
          helping users list and explore properties freely.
          <br />
          If you have any queries, suggestions, or issues with your property
          listing, feel free to reach out to us.
        </p>

        <div className="contact-details">
          <p>
            📧 Email us at:{" "}
            <a href="mailto:your-email@example.com">hmestate999@gmail.com</a>
          </p>
          <p>💬 We usually respond within 24–48 hours.</p>
        </div>
      </section>

      {/* Small Disclaimer */}
      <section className="contact-note">
        <p>
          ⚠️ Please note: We do <strong>not</strong> handle any payments,
          transactions, or disputes between buyers and sellers.
          <br />
          This page is only for support and communication regarding the website
          itself.
        </p>
      </section>
    </div>
  );
}

export default Contact;

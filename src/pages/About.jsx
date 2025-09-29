import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Making property discovery and listing simple, open, and transparent.</p>
      </section>

      {/* Who We Are */}
      <section className="about-who">
        <h2>Who We Are</h2>
        <p>
          This platform is an <strong>open-source project</strong> created to make
          property listing and discovery simple for everyone. 
          <br /> No signup required — you can freely explore properties,
          list your home, and even leave reviews. 
          <br />Our mission is to remove barriers between buyers and sellers
          while keeping the process transparent and easy-to-use.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To provide a simple, transparent and accessible platform for property
            discovery and listing.
          </p>
        </div>
        <div className="mission-card">
          <h3>Our Vision</h3>
          <p>
            To become the go-to open platform for property listings, empowering
            both buyers and sellers without unnecessary restrictions.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-steps">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <h4>Step 1</h4>
            <p>
              No signup required — explore or list property freely, and also
              share your reviews.
            </p>
          </div>
          <div className="step-card">
            <h4>Step 2</h4>
            <p>
              List your property easily by clicking on the
              <strong> "List Your Home"</strong> button and filling the form with
              accurate details.
            </p>
          </div>
          <div className="step-card">
            <h4>Step 3</h4>
            <p>
              If your property is sold, just email us to delete or move it to
              the <strong>Recent Sales</strong> section.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">✅ Simple & Free Listing</div>
          <div className="why-card">✅ No Signup Hassle</div>
          <div className="why-card">✅ User-Friendly Design</div>
          <div className="why-card">✅ Transparent Process</div>
        </div>
      </section>

      {/* Contact */}
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions or suggestions? We’d love to hear from you! <br />
          Contact us at:{" "}
          <a href="mailto:your-email@example.com">hmestate999@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default About;

/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import ReviewsSection from "../components/ReviewsSection";
import AboutSection from "../components/AboutSection";

import RecentSale from '../components/RecentSale'  //abhi abhi ka hai
import recentSales from '../data/data' //abhi ka hai

import Hero from '../components/Hero'
import './Home.css'

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setProperties(res.data));
  }, []);

  return (
    <>
    <Hero />
    <AboutSection />
      <section className="recent-sale-section">
        <h2 className="recent-sale-title">Featured Listings</h2>
        <div className="recent-sale-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      <RecentSale sales={recentSales} />
      <ReviewsSection />
      <Footer />
    </>
  );
}

export default Home;
*/

import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom"; // 👈 add this
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import ReviewsSection from "../components/ReviewsSection";
import AboutSection from "../components/AboutSection";
import RecentSale from '../components/RecentSale'
import recentSales from '../data/data'
import Hero from '../components/Hero'
import './Home.css'

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";

function Home() {
  const [properties, setProperties] = useState([]);
  const listingsRef = useRef(null);   // 👈 reference
  const location = useLocation();     // 👈 detect hash

  useEffect(() => {
    axios.get(API_URL).then((res) => setProperties(res.data));
  }, []);

  // 👇 Scroll effect for #properties
  useEffect(() => {
    if (location.hash === "#properties" && listingsRef.current) {
      listingsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutSection />

      {/* Featured Listings */}
      <section id="properties" ref={listingsRef} className="recent-sale-section">
        <h2 className="recent-sale-title">Featured Listings</h2>
        <div className="recent-sale-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <RecentSale sales={recentSales} />
      <ReviewsSection />
      <Footer />
    </>
  );
}

export default Home;
























/*
import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import FeaturedListings from "./FeaturedListings";
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <About />
      <FeaturedListings />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
*/
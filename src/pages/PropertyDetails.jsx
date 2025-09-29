/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";

function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`).then((res) => setProperty(res.data));
    }, [id]);

    if (!property) return <p>Loading...</p>;

    return (
        <div className="property-details">

            {/* Image Carousel 
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
                {property.images?.map((img, i) => (
                    <div key={i}>
                        <img src={img} alt={`property-${i}`} />
                    </div>
                ))}
            </Carousel>
            <h2>{property.location}</h2>
            <p>Rooms: {property.rooms} | Bathrooms: {property.bathrooms} | Parking: {property.parking} | Total Area: {property.area}</p>
            <p>Price: {property.price} Rs | City: {property.city}, {property.location}</p>
            

            <h3>Description</h3>
            <p>{property.description}</p>

            {/* Contact Card 
            <div className="contact-card">
                <h3>Contact Seller</h3>
                <p>Name: {property.name}</p>
                <p>Email: {property.email}</p>
                <p>Phone: {property.no}</p>
            </div>
        </div>
    );
}

export default PropertyDetails;
*/




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./PropertyDetails.css";

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((res) => setProperty(res.data));
  }, [id]);

  if (!property) return <p className="loading">Loading...</p>;

  return (
    <div className="property-details-page">
      {/* Image Carousel */}
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {property.images?.map((img, i) => (
            <div key={i}>
              <img src={img} alt={`property-${i}`} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Property Info */}
      <div className="property-info">
        <h2>{property.title}</h2>
        <p className="price">Price: {property.price} Rs</p>
        <h3>About</h3>
        <p className="meta">
          🏠 {property.rooms} Rooms | 🛁 {property.bathrooms} Bathrooms | 🚗{" "}
          {property.parking} Parking | 📐 {property.area} sqm
        </p>
        <p className="city">
          📍 {property.city}, {property.location}
        </p>

        <h3>Details</h3>
        <p className="description">{property.description}</p>
      </div>

      {/* Contact Seller */}
      <div className="contact-card">
        <h3>Contact Seller</h3>
        <p>
          👤 <strong>{property.name}</strong>
        </p>
        <p>📧 {property.email}</p>
        <p>📞 {property.no}</p>
      </div>
    </div>
  );
}

export default PropertyDetails;

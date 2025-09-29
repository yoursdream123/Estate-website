/*
import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/duzexi3e8/image/upload";
const UPLOAD_PRESET = "my_preset"; // jo tumne Cloudinary mein banaya hai

function AddProperty() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    no: "",
    rooms: "",
    bathrooms: "",
    parking: "",
    area: "",
    price: "",
    city: "",
    location: "",
    status: "",
    description: "",
    images: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const uploadedImages = [];

    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const data = new FormData();
      data.append("file", files[i]);
      data.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: data,
      });

      const file = await res.json();
      uploadedImages.push(file.secure_url);
    }
    setLoading(false);

    setFormData({ ...formData, images: uploadedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, formData);
    alert("Property added successfully!");
    setFormData({
      name: "",
      email: "",
      no: "",
      rooms: "",
      bathrooms: "",
      parking: "",
      area: "",
      price: "",
      city: "",
      location: "",
      status: "",
      description: "",
      images: [],
    });
  };

  return (
    <div className="form-container">
      <h2>List Your Home</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="no" placeholder="Phone Number" value={formData.no} onChange={handleChange} required />
        <input name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} required />
        <input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        <input name="parking" placeholder="Parking Area" value={formData.parking} onChange={handleChange} required />
        <input name="area" placeholder="Total Area (sqm)" value={formData.area} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="status" placeholder="Rent/Sale" value={formData.status} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>

        <input type="file" multiple onChange={handleImageUpload} />
        {loading && <p>Uploading images...</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProperty;
*/





















































import React, { useState } from "react";
import axios from "axios";
import "./AddProperty.css";

import { Link } from "react-router-dom";

const API_URL = "https://68d56a71e29051d1c0ae8a7c.mockapi.io/properties";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/duzexi3e8/image/upload";
const UPLOAD_PRESET = "my_preset"; // jo tumne Cloudinary mein banaya hai

function AddProperty({ onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    no: "",
    title: "",
    rooms: "",
    bathrooms: "",
    parking: "",
    area: "",
    price: "",
    city: "",
    location: "",
    status: "",
    description: "",
    images: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const uploadedImages = [];

    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const data = new FormData();
      data.append("file", files[i]);
      data.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: data,
      });

      const file = await res.json();
      uploadedImages.push(file.secure_url);
    }
    setLoading(false);

    setFormData({ ...formData, images: uploadedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, formData);
    alert("Property added successfully!");
    setFormData({
      name: "",
      email: "",
      no: "",
      title: "",
      rooms: "",
      bathrooms: "",
      parking: "",
      area: "",
      price: "",
      city: "",
      location: "",
      status: "",
      description: "",
      images: [],
    });
  };

  return (
    <div className="form-wrapper">
      {/* Back Button */}
      
      <Link to="/" className="back-btn">
        ← Back
      
      </Link>

      <div className="form-container">
        <h2>List Your Home</h2>
        <form onSubmit={handleSubmit} className="property-form">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="no" placeholder="Phone Number" value={formData.no} onChange={handleChange} required />
          <input name="title" placeholder="title:  ex: Modern Family Home/ Beautiful Villa" value={formData.title} onChange={handleChange} required />
          <input name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} required />
          <input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
          <input name="parking" placeholder="Parking Area" value={formData.parking} onChange={handleChange} required />
          <input name="area" placeholder="Total Area (sqm)" value={formData.area} onChange={handleChange} required />
          <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <input name="status" placeholder="Rent/Sale" value={formData.status} onChange={handleChange} required />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <input type="file" multiple onChange={handleImageUpload} />
          {loading && <p className="uploading">Uploading images...</p>}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;

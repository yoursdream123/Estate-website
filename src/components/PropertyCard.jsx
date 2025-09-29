/*
import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  if (!property) return null;

  return (
    <div className="property-card">
      <img src={property.images?.[0]} alt="house" style={{ width: "200px" }} />
      <h3>{property.location}</h3>
      <p>
        Rooms: {property.rooms}, Bathrooms: {property.bathrooms}, Parking: {property.parking}
      </p>
      <Link to={`/properties/${property.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default PropertyCard;
*/

















/*
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

function PropertyCard({ property }) {
  if (!property) return null;

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
        },
      }}
    >
      
      <CardMedia
        component="img"
        height="200"
        image={property.images?.[0]}
        alt={property.location}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {property.location}
        </Typography>

        
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Chip
            icon={<HomeIcon />}
            label={`${property.rooms} Rooms`}
            variant="outlined"
          />
          <Chip
            icon={<BathtubIcon />}
            label={`${property.bathrooms} Baths`}
            variant="outlined"
          />
          <Chip
            icon={<DriveEtaIcon />}
            label={`${property.parking} Parking`}
            variant="outlined"
          />
        </Box>

        
        <Link to={`/properties/${property.id}`} style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 2,
              bgcolor: "#667eea",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#5a67d8" },
            }}
          >
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
*/





import React from "react";
import { Link } from "react-router-dom";
import "./RecentSale.css";

function PropertyCard({ property }) {
  if (!property) return null;

  const imgSrc = property.images?.[0] || "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <article className="property-card" aria-label={`Property in ${property.location}`}>
      <div className="recent-sale-card">
        <img src={imgSrc} alt={property.location || "Property image"} className="recent-sale-img" />
        <div className="recent-sale-content">
          <h3>for {property.status}</h3>
          <h3>{property.title}</h3>
          <p className="recent-sale-city">{property.city || "Unknown Location"}</p>
          <p className="recent-sale-price">PKR {property.price || "Unknown Price"}</p>
          <p className="recent-sale-desc">A beautiful modern home with {property.rooms ?? 0} bedrooms, {property.bathrooms ?? 0} bathrooms and a parking area with a space of {property.parking ?? 0} cars. <Link to={`/properties/${property.id}`} aria-label={`View details for ${property.location}`}>View Details</Link></p>
        </div>
      </div>
    </article >
  );
}

export default PropertyCard;
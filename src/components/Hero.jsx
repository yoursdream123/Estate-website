/*
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import './Hero.css'

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    "Home",
    "Properties",
    "Recent Sale",
    "User Guidelines",
    "About",
  ];

  return (
    <>
      
      <AppBar position="static" sx={{ background: "#667eea" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="button"
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 500,
                  "&:hover": { color: "#e0e7ff" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white", ml: "auto" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.85)",
            color: "white",
            width: "100%",
            textAlign: "center",
            position: "relative",
          },
        }}
      >
        
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
        >
          <CloseIcon />
        </IconButton>

        <List sx={{ mt: 8 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: "h6",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Hero;
*/





















/*
import { Box, Typography, Container } from "@mui/material";



const Hero = () => {

  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", fontFamily: "'Montserrat', sans-serif" }}
        >
          L U M I N A
          <br />
          G A L L E R Y
        </Typography>

      </Box>

      
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
            textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Your Daily Dose of Inspiration
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontSize: { xs: "1rem", md: "1.2rem" },
            textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
          }}
        >
          Search and collect photos that match your ideas & projects.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
*/





































































































/*
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from '../assets/logo.png';
import logoName from '../assets/logoname.png';
import { Link } from "react-router-dom";
import UserGuidelines from '../pages/UserGuidelines'



const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/properties" },
    { label: "Recent Sale", path: "/recent-sale" },
    { label: "User Guidelines", path: "/user-guidelines" },
    { label: "About", path: "/about" },
  ];

  

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1738597452982-94c502d0a216?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >

      /* Overlay 
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // 0.5 = 50% transparent black
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column" }}>


        /* Navbar 
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            py: 2,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            /* Logo 
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img
                src={logoWhite}
                alt="logo icon"
                style={{ height: "40px", filter: "brightness(0) invert(1)" }}
              />
              <img
                src={logoName}
                alt="logo text"
                style={{ width: "100px" }}
              />
            </Box>

            /* Centered Menu 
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 4,
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      cursor: "pointer",
                      fontWeight: 500,
                      "&:hover": { color: "#e0e7ff" },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>

            {/* Hamburger on mobile (right side) 
            <IconButton
              sx={{ display: { xs: "block", md: "none" }, color: "white" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

        </AppBar>

        {/* Mobile Drawer 
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0,0,0,0.85)",
              color: "white",
              width: "100%",
              textAlign: "center",
              position: "relative",
            },
          }}
        >
          {/* Close button 
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          <List sx={{ mt: 8 }}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="button"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": { color: "#e0e7ff" },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </List>

        </Drawer>

        {/* Hero Content 
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Find Your Dream Home
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/add-property">


              <Button
                variant="contained"
                sx={{
                  bgcolor: "#667eea",
                  "&:hover": { bgcolor: "#5a67d8" },
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: "bold",
                }}
              >
                List Your Home
              </Button>
            </Link>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                "&:hover": { borderColor: "#e0e7ff", color: "#e0e7ff" },
              }}
            >
              Buy a Home
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
*/


import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1738597452982-94c502d0a216?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // 👈 responsive font
          }}
        >
          Find Your Dream Home
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
          <Button
            component={Link}
            to="/add-property"
            variant="contained"
            sx={{
              bgcolor: "#667eea",
              "&:hover": { bgcolor: "#5a67d8" },
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.2, md: 1.5 },
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, // 👈 responsive text
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            List Your Home
          </Button>
          <Button
          component={Link}
            variant="outlined"
            to="/#properties"
            sx={{
              color: "white",
              borderColor: "white",
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.2, md: 1.5 },
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, // 👈 responsive text
              borderRadius: 2,
              fontWeight: "bold",
              "&:hover": { borderColor: "#e0e7ff", color: "#e0e7ff" },
            }}
          >
            Buy a Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

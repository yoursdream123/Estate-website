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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo.png";
import logoName from "../assets/logoname.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Properties", path: "/#properties" },
    { label: "User Guidelines", path: "/user-guidelines" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="absolute"  // 👈 important
        sx={{
          background: "transparent",
          boxShadow: "none",
          py: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={logoWhite}
              alt="logo icon"
              style={{ height: "40px", filter: "brightness(0) invert(1)" }}
            />
            <img src={logoName} alt="logo text" style={{ width: "100px" }} />
          </Box>

          {/* Menu items desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                variant="body1"
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  color: "white",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": { color: "#e0e7ff" },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
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
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={item.label}
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

export default Navbar;

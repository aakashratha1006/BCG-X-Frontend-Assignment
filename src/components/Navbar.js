import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { Person2Outlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: "black",
        height: "60px",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)", // Adds subtle border
      }}
    >
      <Toolbar sx={{ backgroundColor: "black" }}>
        {/* Left: Menu Icon and Webapp text */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1 }}>
          Webapp
        </Typography>

        {/* Right: Globe Icon, User Icon, and "User" Text */}
        <Box display="flex" alignItems="center">
          {/* Language selector button */}
          <IconButton color="inherit">
            <LanguageIcon />
          </IconButton>
          {/* User profile button with custom styling */}
          <IconButton color="inherit">
            <Person2Outlined sx={{ color: "white", fontSize: 28 }} />
          </IconButton>
          {/* Display current user name */}
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            user
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

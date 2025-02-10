import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        backgroundColor: "transparent", 
        marginBottom: "10px", 
      }}
    >
      {/* Left Section: Text + Button in One Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px" },
          }}
        >
          Hello User,
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#64B5F6",
            color: "black",
            textTransform: "none",
            borderRadius: "8px",
            padding: "6px 16px",
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "#42A5F5",
            },
          }}
        >
          <InfoOutlined sx={{ fontSize: 20, color: "black" }} />
          There are 2 to action items.
        </Button>
      </Box>
    </Box>
  );
};

export default Header;

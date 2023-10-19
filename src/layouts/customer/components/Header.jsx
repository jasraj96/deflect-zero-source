import { AppBar, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
                <Typography textAlign="center" color="white">
                  All Details
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/Customer" style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
                <Typography textAlign="center" color="white">
                  Search By ID
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/CustomerByNumber" style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
                <Typography textAlign="center" color="white">
                  Search By Number
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/Patch" style={{ textDecoration: "none" }}>
              <MenuItem sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
                <Typography textAlign="center" color="white">
                  Edit Number or Mail
                </Typography>
              </MenuItem>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

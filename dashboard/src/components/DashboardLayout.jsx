import React from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        style={{ width: drawerWidth, flexShrink: 0 }}
        PaperProps={{ style: { width: drawerWidth } }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/products">
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/github">
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary="GitHub Finder" />
          </ListItem>
        </List>
      </Drawer>

      <main style={{ flexGrow: 1, padding: "20px", marginLeft: drawerWidth }}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

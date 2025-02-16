// components/DashboardLayout.jsx
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';

const drawerWidth = 240;

const NAVIGATION = [
  
  { title: 'Products', path: '/products', icon: <ShoppingCartIcon /> },
  { title: 'Users', path: '/users', icon: <PeopleIcon /> },
  { title: 'GitHub Finder', path: '/github', icon: <GitHubIcon /> },
];

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> {/* Empty Toolbar to offset content below AppBar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {NAVIGATION.map((item) => (
              <ListItem
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Empty Toolbar to offset content below AppBar */}
        <Outlet /> {/* This will render the nested routes */}
      </Box>
    </Box>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const universities = [
//   'کمپیوټر ساینس',
//   'طب پوهنځی',
//   'انجنری پوهنځی',
//   'حفوق پوهنځی',
// ];

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './App.css'; // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">پوهنځیانی</h2>
      <hr/>
    
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">کمپیوټر ساینس</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-link">طب پوهنځی</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/services" className="sidebar-link">انجنری پوهنځی</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/contact" className="sidebar-link">حفوق پوهنځی</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
import React from "react";
import { Link as RouterLink } from 'react-router-dom';

/* MUI Components */
//import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'
//import Collapse from '@mui/material/Collapse';

/* MUI Icons */
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';                              // Home Page
import HomeWorkIcon from '@mui/icons-material/HomeWork';                      // ICS Home Page
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';  // Admin Page
import EventIcon from '@mui/icons-material/Event';                            // Schedular Page
import DataUsageIcon from '@mui/icons-material/DataUsage';                    // Overview Page
//import ExpandLess from '@mui/icons-material/ExpandLess';
//import ExpandMore from '@mui/icons-material/ExpandMore';


// Wrapper component function to allow React-Router links in MUI MenuItem 
function MenuItemLink(props) {
  const { icon, primary, to, ...other } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <RouterLink to={to} ref={ref} {...itemProps} /*role={undefined}*/ />;
      }),
    [to],
  );
  
  return (
    <li>
      <MenuItem component={renderLink} {...other}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </MenuItem>
    </li>
  );
}

// Wrapper component function to allow anchor <a> links in MUI MenuItem 
function MenuItemLinkExternal(props) {
  const { icon, primary, to, ...other } = props;
  
  return (
    <li>
      <MenuItem component='a' href={to} {...other}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </MenuItem>
    </li>
  );
}


const HeaderNavMenu = ({btnStyle}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null); 

  return(
    <div>
      <IconButton
        //id="basic-button"
        //aria-controls={open ? 'basic-menu' : undefined}
        //aria-haspopup="true"
        //aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
        size='small'
        sx={{ 
          borderRadius: '20%',
          // background: '#dbdcde',
          ...btnStyle
        }}
      >
        <MenuIcon fontSize="large"/>
      </IconButton>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={menuOpen}
        autoFocus={false}
        onClose={handleMenuClose}
        component='nav'
        //id="basic-menu"
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
      >
        
        <MenuItemLink
          primary='Home'
          to='/'
          icon={<HomeIcon />}
          onClick={handleMenuClose}
        />

        <Divider />

        <MenuItemLink
          primary='Reserve a Machine'
          to='/schedule'
          icon={<EventIcon />}
          onClick={handleMenuClose}
        />

        <MenuItemLink
          primary='Admin Tools'
          to='/admin'
          icon={<AdminPanelSettingsIcon />}
          onClick={handleMenuClose}
        />

        <MenuItemLink
          primary='ICS Utilization Overview'
          to='/overview'
          icon={<DataUsageIcon />}
          onClick={handleMenuClose}
        />

        <Divider />

        <MenuItemLinkExternal
          primary="ICS Homepage"
          to="https://innovate.utk.edu/"
          icon={<HomeWorkIcon />}
          onClick={handleMenuClose}
        />
      </Menu>
    </div>
  )
}

export default HeaderNavMenu

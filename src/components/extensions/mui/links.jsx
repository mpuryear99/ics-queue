import React from "react";
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/**
 * Wrapper component to allow React-Router {@link Link} in MUI {@link ListItem}.
 */
export function ListItemLink({ icon, primary, to, ...other }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} /*role={undefined}*/ />;
      }),
    [to],
  );
  
  return (
    <li>
      <ListItem component={renderLink} {...other}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

/**
 * Wrapper component to allow React-Router {@link Link} in MUI {@link MenuItem}.
 */
 export function MenuItemLink({ icon, primary, to, ...other }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} /*role={undefined}*/ />;
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


/**
 * Wrapper component to allow `<a>` anchor links in MUI {@link ListItem}
 */
export function ListItemLinkExternal({ icon, primary, to, ...other }) {
  return (
    <li>
      <ListItem component='a' href={to} {...other}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

/**
 * Wrapper component to allow `<a>` anchor links in MUI {@link MenuItem}
 */
export function MenuItemLinkExternal({ icon, primary, to, ...other }) {
  return (
    <li>
      <MenuItem component='a' href={to} {...other}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </MenuItem>
    </li>
  );
}

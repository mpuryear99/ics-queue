import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function MachineLinks() {
  return (
    <Box sx={{ background: "#f5f5f5", 
    width: "400px",
    height: "350px", 
    margin: "20px",
    border: "2px solid #000000",
    alignItems: "center",
    maxHeight: "100%",
    overflow: 'auto'
    }}>
        <h1 style = {{padding: " 0px 25px"}}>Machines</h1>
      <nav aria-label="machine links">
        <List>
          <ListItem>
            <ListItemButton component="a" href = "admin/3DPrinter">
              <ListItemText primary="3D Printer" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/CNC">
              <ListItemText primary="CNC Machine" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/VBS">
              <ListItemText primary="Vertical Band Saws" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/PVBS">
              <ListItemText primary="Powermatic Vertical Band Saw" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/HBS">
              <ListItemText primary="Horizontal Band Saw" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/CMS">
              <ListItemText primary="Chop/Miter Saw" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/DP">
              <ListItemText primary="Drill Press" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/GBW">
              <ListItemText primary="Grinder and Buffing Wheel" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/BS">
              <ListItemText primary="Belt Sander" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/DS">
              <ListItemText primary="Drum Sander" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/IS">
              <ListItemText primary="Intermediate Sander" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/OSS">
              <ListItemText primary="Oscillating Spindle Sander" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/SS">
              <ListItemText primary="Scroll Saw" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/TS">
              <ListItemText primary="Table Saw" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/WL">
              <ListItemText primary="Wooden Lathe" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/PL">
              <ListItemText primary="Powermatic Lathe" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/PJ">
              <ListItemText primary="Planner/Jointer" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/CNCR">
              <ListItemText primary="CNC Router" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href = "admin/MCNC">
              <ListItemText primary="Manual CNC" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
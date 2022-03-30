import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Data, {names} from "./Machines/SampleData";







// generatePath("/admin/:id", {
//   id: Data[1].machine,
// });

export default function MachineLinks() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        width: "400px",
        height: "350px",
        margin: "20px",
        border: "2px solid #000000",
        alignItems: "center",
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      <h1 style={{ padding: " 0px 25px" }}>Machines</h1>
      <nav aria-label="machine links">
      <List>
        {names.map(tool => {
            return (
              <ListItem key={tool.machine}>
                  <ListItemButton component="a" href = {`admin/${tool.machine.replace(' ', '-')}`}>
                    <ListItemText primary={tool.machine} />
                  </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

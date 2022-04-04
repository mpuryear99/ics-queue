import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItemLink } from "../extensions/mui/links";
import Data, {names} from "./Machines/SampleData";


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
          {names.map(tool => (
            <ListItemLink key={tool.machine} primary={tool.machine} to={`./${tool.machine.replace(' ', '-')}`} />
          ))}
        </List>
      </nav>
    </Box>
  );
}

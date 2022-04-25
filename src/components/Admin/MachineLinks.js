import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItemLink } from "components/extensions/mui/links";
import DBService from "data/DBService";


export default function MachineLinks() {
  const [machineList, setMachineList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let ml = await DBService.getMachines();
      if (ml !== undefined) {
        setMachineList(ml)
      }
    })();
  }, [])

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
      <h1 style={{ padding: "0px 25px" }}>Machines</h1>
      <List>
        {machineList.map(m => (
          <ListItemLink key={m._id} primary={m.name} to={m._id.toString()} />
        ))}
      </List>
    </Box>
  );
}

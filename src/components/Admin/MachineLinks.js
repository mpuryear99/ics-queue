import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItemLink } from "components/extensions/mui/links";
import DBService from "data/DBService";


export default function MachineLinks({style}) {
  const [machineList, setMachineList] = React.useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      let ml = await DBService.getMachines();
      if (ml !== undefined && isSubscribed) {
        setMachineList(ml)
      }
    })();
    return () => isSubscribed = false;
  }, [])

  return (
    <Box sx={{
      ...style,
      display: "flex",
      flexDirection: "column"
    }}>
      <h2 style={{ padding: "0px 25px" }}>Machines</h2>
      <List sx={{ overflow: "auto" }}>
        {machineList.map(m => (
          <ListItemLink key={m._id} primary={m.name} to={m._id.toString()} />
        ))}
      </List>
    </Box>
  );
}

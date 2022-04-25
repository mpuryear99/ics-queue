import React from "react";
import DBService from "../../data/DBService";
import moment from "moment-timezone";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


const TZ_NY = "America/New_York";

export default function ScheduledApps({ name }) {

  const [machinesDict, setMachinsDict] = React.useState({});
  const [appointmentList, setAppointmentList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let ml = await DBService.getMachines();
      if (ml !== undefined) {
        let md = {};
        for (let m of ml) {
          md[m._id] = m.name;
        }
        console.log(ml)
        console.log(md)
        setMachinsDict(md);
      }
    })();
  }, []);
  
  React.useEffect(() => {
    (async () => {
      let appts = await DBService.getAppointments();
      if (appts !== undefined) {
        setAppointmentList(appts);
      }
    })();
  }, []);


  const onClickDelete = async (apptID) => {
    console.log("Attempting to delete " + apptID);

    await DBService.deleteAppointmentByID(apptID);

    let appts = await DBService.getAppointments();
    if (appts !== undefined) {
      setAppointmentList(appts);
    }
  }

  return (
    <>
      {/* <h2 style={{ padding: "0px 25px" }}>{name}'s Appointments</h2> */}

      <List 
        dense={false}
        subheader={`${name}'s Appointments`}
      >
        {appointmentList.map((a) => (
          <ListItem
            key={a._id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => { onClickDelete(a._id); }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={machinesDict[a.machine_id]}
              secondary={
                moment.unix(a.startTime).tz(TZ_NY).format("MMMM Do YYYY, h:mm:ss a") +
                " - " +
                moment.unix(a.endTime).tz(TZ_NY).format("MMMM Do YYYY, h:mm:ss a")
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

import React from "react";
import DBService from "../../data/DBService";
import moment from "moment-timezone";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


const TZ_NY = "America/New_York";

export default function ScheduledApps({ apptQuery, subheader }) {

  const [machinesDict, setMachinsDict] = React.useState({});
  const [appointmentList, setAppointmentList] = React.useState([]);
  const [apptsToDelete, setApptsToDelete] = React.useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      let ml = await DBService.getMachines();
      if (ml !== undefined) {
        let md = {};
        for (let m of ml) {
          md[m._id] = m.name;
        }
        if (isSubscribed) {
          setMachinsDict(md);
        }
      }
    })();
    return () => { isSubscribed = false; }
  }, []);
  

  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      let appts = undefined;
      if (apptQuery != null) {
        appts = await DBService.getAppointmentsByQuery(apptQuery);
      }

      if (isSubscribed) {
        setAppointmentList(appts ?? []);
      }
    })();

    return () => { isSubscribed = false; }
  }, [apptQuery]);


  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      if (apptsToDelete.length > 0) {
        await Promise.allSettled(
          apptsToDelete.map(id => DBService.deleteAppointmentByID(id))
        );
  
        if (isSubscribed) {
          setAppointmentList(appts => appts.filter(a => !apptsToDelete.includes(a._id)));
          setApptsToDelete([]);
        }
      }
    })();

    return () => { isSubscribed = false; }
  }, [apptsToDelete]);


  const onClickDelete = (apptID) => {
    setApptsToDelete(l => [...l, apptID]);
  }

  return (
    <>
      {/* <h2 style={{ padding: "0px 25px" }}>{name}'s Appointments</h2> */}
      <List 
        dense={false}
        subheader={subheader}
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
                moment.unix(a.startTime).tz(TZ_NY).format("MMMM Do YYYY, h:mm a") +
                " - " +
                moment.unix(a.endTime).tz(TZ_NY).format("h:mm a")
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

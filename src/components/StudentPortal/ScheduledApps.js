import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

import DBService from "../../data/DBService";
import moment from "moment";
import { IconButton, ListItem } from "@mui/material";

export default function ScheduledApps({ name }) {
  //  const appointmentList = React.useMemo(() => DBService.getAppointments(),  []);
  //  const machineList = React.useMemo(() => DBService.getMachines(),  []);
  //  console.log(appointmentList)

  const [machineList, setMachineList] = React.useState([]);
  React.useEffect(async () => {
    let m2 = await DBService.getMachines();
    if (m2 !== undefined) {
      setMachineList(m2);
    }
  }, []);

  const [appointmentList, setAppointmentList] = React.useState([]);
  React.useEffect(async () => {
    let ml = await DBService.getAppointments();
    if (ml !== undefined) {
      setAppointmentList(ml);
    }
  }, []);
  // const [appointmentList, setAppointmentList] = React.useState([]);
  // React.useEffect(() => {
  //   (async () => {
  //     let appts = await DBService.getAppointments();
  //     if (appts !== undefined) {
  //       setAppointmentList(appts);
  //     }
  //   })();
  // }, []);

  // const [machineList, setMachineList] = React.useState([]);
  // React.useEffect(() => {
  //   (async () => {
  //     let m2 = await DBService.getMachines();
  //     if (m2 !== undefined) {
  //       setMachineList(m2);
  //     }
  //   })();
  // }, []);

  console.log(machineList);

  //  const appts = await appointmentList.then(result => result.data);
  //  console.log(appts)

  //   const person = appointmentList.then(
  //     function(value) {
  //       console.log("HERE")
  //       console.log(appointmentList)
  //       console.log(value)
  //       const person = value.filter(function (appointments)
  //       {
  //           return appointments.username === name;
  //       })

  //       console.log(person)
  //       return (<h1>{person}</h1>);
  //     }
  //  )

  function deleteAppt(id)
  {
    console.log("I want to delete" + id)

    DBService.deleteAppointmentByID(id)

  }


  function machineName(machineID) {
    const name = machineList.filter(function (machine) {
      console.log(machineList.length)

      return machineID === machine._id;
    });
    return name[0].name;
  }

  return (
    <div>
      <h2 style={{ padding: "0px 25px" }}>{name}'s Appointments</h2>

      <List dense={false}>
      {appointmentList.map((a) => (
        <div>
          
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => { console.log('onClick'); deleteAppt(a._id); }}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={machineName(a.machine_id)}
                secondary={
                  moment(a.startTime).format("MMMM Do YYYY, h:mm:ss a") +
                  " - " +
                  moment(a.endTime).format("MMMM Do YYYY, h:mm:ss a")
                }
              />
            </ListItem>
          
        </div>
      ))}
      </List>
    </div>
  );
}

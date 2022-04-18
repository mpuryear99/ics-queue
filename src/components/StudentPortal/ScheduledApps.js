import React from "react";
import Box from "@mui/material/Box";


import DBService from "../../data/DBService";
import moment from "moment";


export default function ScheduledApps({name}) {
   const appointmentList = React.useMemo(() => DBService.getAppointments(),  []);
   const machineList = React.useMemo(() => DBService.getMachines(),  []);
   const person = appointmentList.filter(function (appointments)
   {
       return appointments.name === name;
   })

   function deleteEvent()
   {
      
   }

   function machineName(machineID)
   {
      const name = machineList.filter(function (machine)
        {
          return machineID === machine._id
        }
      )
      return name[0].name;
   }

   

  return (
  
    <div>
      <h2 style={{ padding: "0px 25px" }}>{name}'s Appointments</h2>
      
        {person.map(a => (
          <div>
            <Box
            sx={{
              p: 2,
              background: "#f5f5f5",
              width: "400px",
              height: "180px",
              margin: "20px",
              border: "2px solid #000000",
              alignItems: "center",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
        <div>
          <h3>Machine: {machineName(a.machineID)}</h3>
          <h3>Start Time: {moment(a.startTime).format('MMMM Do YYYY, h:mm:ss a')}</h3>
          <h3>End Time: {moment(a.endTime).format('MMMM Do YYYY, h:mm:ss a')}</h3>
        </div>
        </Box>
        <button onClick={deleteEvent} style={{ position: "relative", left: "20px" }}>
          Delete Appointment
        </button>
        </div>
     
        ))}

      </div>

  );
}
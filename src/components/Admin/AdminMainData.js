import React from "react";
import Box from "@mui/material/Box";

export default function AdminMainData({style, num_Users, time_usage, scheduled_App, curr_Proj}) {
  return (
    <Box sx={style}>
      <h2 style={{padding: "0px 0px", textAlign:"center"}}>Admin Data</h2>
      <p>Number of Users: {num_Users}</p>
      <p>Time Used: {time_usage}</p>
      <p>Scheduled Appointments: {scheduled_App}</p>
      <p>Current Projects Running: {curr_Proj}</p>
    </Box>
  );
}
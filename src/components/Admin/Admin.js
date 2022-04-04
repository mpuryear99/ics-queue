import React from "react";
import { Outlet } from "react-router-dom";
import Appointment from "./Appointment";
import AdminMainData from "./AdminMainData";
import MachineLinks from "./MachineLinks";


let Appointments = {
    1: {
        name: "3D Printer",
        day: "2/22/22",
    },
    2: {
        name: "CNC Machine",
        day: "12/23/34",
    }
}

let Data = 
{
    1: {
        num_Users: 20,
        time_usage: "2 hours", 
        scheduled_App: 5, 
        curr_Proj: 6,
    }, 
}

export default function Admin() {
    return (
    <div>
        <h1 style = {{padding: "0px 25px"}}>Admin Home Page</h1>
        <div className="Display" 
            style={{
                display: "flex"
            }}>
            
            <div className="MachineLinks">
                <MachineLinks/>
            </div>
            <div className="AdminMainData" 
            style={{
                width: "500px",
                border: "2px solid #ffffff",
                padding: "10px",
                background: "#ffffff",
                alignItems: "center"
            }}>
                <AdminMainData num_Users={Data[1].num_Users} time_usage={Data[1].time_usage} scheduled_App={Data[1].scheduled_App} curr_Proj={Data[1].curr_Proj}/>
            </div>
        </div>
        <Outlet/>
    </div>
    );
}
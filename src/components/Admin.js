import React from "react";
import Appointment from "./Appointment";


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

export default function Admin() {
    return (
    <div>
        <h1>Admin Home Page</h1>

        <div className="Appointments" 
        style={{
            width: "500px",
            border: "2px solid #ffffff",
            padding: "10px",
            background: "#ffffff",
        }}>
            <Appointment name={Appointments[1].name} day={Appointments[1].day}/>
            <Appointment name={Appointments[2].name} day={Appointments[2].day}/>

        </div>
    </div>
    );
}
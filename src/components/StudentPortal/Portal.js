import React from "react";
import { Outlet } from "react-router-dom";
import ScheduledApps from "./ScheduledApps";



export default function Portal() {

    return (
    <div>
        <h1 style = {{padding: "0px 25px"}}>Student Portal</h1>
        <div className="Display" 
            style={{
                display: "flex"
            }}>

            <div className="ScheduledApps">
                <ScheduledApps name = "user1"/>
            </div>
        

        </div>
        <Outlet/>
    </div>
    );
}
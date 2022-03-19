import React from "react";
import MachineData from "./MachineData";


let Data = 
{
    1: {
        machine: "Table Saw",
        num_Users: 20,
        time_usage: "2 hours", 
        scheduled_App: 5, 
        curr_Proj: 6,
    }, 


}

export default function TS() {
    return (
    <div>
        <h1 style = {{padding: "0px 25px"}}>Table Saw</h1>
        <div className="Display" 
            style={{
                display: "flex"
            }}>
            
            <div className="Schedule">
                
            </div>
            <div className="MachineData" 
            style={{
                width: "500px",
                border: "2px solid #ffffff",
                padding: "10px",
                background: "#ffffff",
                alignItems: "center"
            }}>
                <MachineData machine={Data[1].machine} num_Users={Data[1].num_Users} time_usage={Data[1].time_usage} scheduled_App={Data[1].scheduled_App} curr_Proj={Data[1].curr_Proj}/>

            </div>
        </div>
        
    </div>
    );
}
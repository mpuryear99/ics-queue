import React, { useEffect } from "react";
import MachineData from "./MachineData";
import {useParams} from 'react-router-dom';
import Data, {names} from "./SampleData";



// let Data = 
// {
//     1: {
//         machine: "Temp Place Hodler",
//         num_Users: 20,
//         time_usage: "2 hours", 
//         scheduled_App: 5, 
//         curr_Proj: 6,
//     }, 
// }





export default function TempMachine(name) {
    useEffect(() => {
        // Fetch data for machine here
    }, [])

    const { machine } = useParams();
    name = machine.replace("-", " ")
    const thisMachine = Data[name]


    return (
    <div>
        <h1 style = {{padding: "0px 25px"}}>{name}</h1>
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
                <MachineData machine = {thisMachine.name} num_Users={thisMachine.num_Users} time_usage={thisMachine.time_usage} scheduled_App={thisMachine.scheduled_App} curr_Proj={thisMachine.curr_Proj}/>

            </div>
        </div>
        
    </div>
    );
}
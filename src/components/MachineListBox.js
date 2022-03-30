import React from "react";
// import Appointment from "./Appointment";
import Machine from "./machine";




// let Appointments = {
//     1: {
//         name: "3D Printer",
//         day: "2/22/22",
//     },
//     2: {
//         name: "CNC Machine",
//         day: "12/23/34",
//     }
// }




export default function MachineListBox({machineList}) {
    console.log("Creating appointment box");
    

    // let machines = machineList.then(data => {
    //     console.log(data);
    // });
    return (
        <div className="Appointments">
        {
            machineList.map((machine, index) => {
                return React.createElement(Machine, {machine});
            })
            }


        }
        </div>
    );
}
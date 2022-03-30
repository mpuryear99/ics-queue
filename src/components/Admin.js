import React, { useEffect } from "react";
import MachineListBox from "./MachineListBox";
import axios from "axios";



// const getData = async () => {

//     // let data = await fetch("/getmachines/").then(res => res.json()).then(res => res);

    
//     return data;
// };


//getData
// const GetData = async () => {
//         const [data, setData] = React.useState([]);
//         axios.get("http://localhost:5000/getmachines").then((goodData) => {
//             setData(goodData.data);
//         }); 
//         console.log(data);
//         // console.log(goodData);
        
//         return data;
// };

export default function Admin () {
    try {
        const [data, setData] = React.useState([]);
        axios.get("http://localhost:5000/getmachines").then((data) => {
            setData(data.data);
        }); 
    
    // let data = GetData();

    // console.log(data);

    // dataGood.then(data => {
    //     console.log(data);
    // });

    
    // let [data, setData ] = React.useState([]);
    // useEffect(() => {
    //     async function getData() {
    //         axios.get("http://localhost:5000/getmachines").then((goodData) => {
    //             setData(goodData.data);
    //         });
    //     }
    // }, []);
       


    return (
    <div>
        <h1>Admin Home Page</h1>

        <div className="MachineList" 
        style={{
            width: "500px",
            border: "2px solid #ffffff",
            padding: "10px",
            background: "#ffffff",
        }}>
         
            <MachineListBox machineList={data}/>

        </div>
    </div>
    );


    } catch (error) {
        console.log(error);
        return(<div>Error</div>);
    }
}
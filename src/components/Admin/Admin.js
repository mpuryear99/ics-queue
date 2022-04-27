import UserContext from "context/UserContext";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminMainData from "./AdminMainData";
import MachineLinks from "./MachineLinks";


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
    const navigate = useNavigate();

    const {appUser} = React.useContext(UserContext);

    React.useEffect(() => {
        if (!(appUser?.admin ?? false)) {
            alert("Not Authorized: Returning to home");
            navigate("/", { replace: true });
        }
    }, [appUser, navigate]);

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
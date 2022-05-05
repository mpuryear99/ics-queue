import UserContext from "context/UserContext";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminMainData from "./AdminMainData";
import MachineLinks from "./MachineLinks";


let Data = 
{
    1: {
        num_Users: 20,
        time_usage: "18 hours", 
        scheduled_App: 5, 
        curr_Proj: 6,
    },
}

const boxStyle = {
    background: "#f5f5f5", 
    width: "400px", 
    height: "350px",
    margin: "10px",
    border: "2px solid #000000",
    //alignItems: "center",
    //padding: "20px",
};


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
        <h2 style = {{padding: "0px 0px", marginTop: "0px"}}>Admin Home Page</h2>
        <div
            style={{
                display: "flex"
            }}
        >
            <MachineLinks 
                style={{
                    ...boxStyle,
                    alignItems: "center",
                    marginLeft:"0px"
                }}
            />
            <AdminMainData
                num_Users={Data[1].num_Users}
                time_usage={Data[1].time_usage}
                scheduled_App={Data[1].scheduled_App}
                curr_Proj={Data[1].curr_Proj}
                style={{
                    ...boxStyle,
                    width:"360px",
                    alignItems: "center",
                    padding: "0px 20px",
                }}
            />
        </div>
        <Outlet/>
    </div>
    );
}
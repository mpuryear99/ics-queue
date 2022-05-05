import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import MachineData from "./MachineData";
import DBService from "data/DBService";
import ScheduledApps from "components/StudentPortal/ScheduledApps";
import moment from "moment-timezone";
import Paper from "@mui/material/Paper";


let Data = 
{
	1: {
		machine: "Temp Place Hodler",
		num_Users: 20,
		time_usage: "2 hours", 
		scheduled_App: 5, 
		curr_Proj: 6,
	}, 
}


export default function TempMachine() {
	const { machine_id } = useParams();
  
  const [apptQuery, setApptQuery] = React.useState(null);
	const [machineInfo, setMachineInfo] = React.useState({
		machine: null,
		numUsers: 0,
		timeUsage: 0,
		scheduledApp: 0,
		currProj: 0,
	});

	useEffect(() => {
    let isSubscribed = true;
    let currTime = moment().unix();
		
    (async () => {
			let machine = await DBService.getMachineByID(machine_id);
      console.log(machine)
      if (isSubscribed) {
        setMachineInfo(ms => ({...ms, machine: machine}));
      }
		})();

    console.log(machine_id);

    if (isSubscribed) {
      setApptQuery({
        machine_id: machine_id,
        endAfter: currTime,
      });
    }

    return () => isSubscribed = false;
	}, [machine_id]);

	const thisMachine = Data[1]

	return (
	<div>
    <h2 style = {{padding: "0px 0px", marginTop: "0px"}}>
      {`Resource Info: ${(machineInfo.machine?.name ?? "")}`}
    </h2>
		<div style={{ display: "flex" }}>
      <Paper sx={{
        width: "404px",
        margin: "10px 10px 10px 0px"
      }}>
			  <ScheduledApps
          subheader={"Upcoming Appointments"}
          apptQuery={apptQuery}
        />
      </Paper>
      <MachineData
        num_Users={thisMachine.num_Users}
        time_usage={thisMachine.time_usage}
        scheduled_App={thisMachine.scheduled_App}
        curr_Proj={thisMachine.curr_Proj}
        style={{
          width: "360px",
          margin: "10px",
          padding: "0px 20px",
          background: "#f5f5f5",
          border: "2px solid #000000",
          alignItems: "center"
        }}
      />
		</div>
	</div>
	);
}
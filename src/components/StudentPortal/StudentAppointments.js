

export default function StudentAppointment({name, machineID, startTime, endTime}) {
    return (
    <div style={{ background: "#f5f5f5", 
                width: "400px", 
                height: "300px",
                margin: "20px",
                border: "2px solid #000000",
                alignItems: "center",
                padding: "20px",
                }}>
       <h1>{name}'s Appointment</h1>
       <h3>Machine: {machineID}</h3>
       <h3>Scheduled Start Time: {startTime}</h3>
       <h3>Scheduled End Time: {endTime}</h3>


    </div>
    );
}
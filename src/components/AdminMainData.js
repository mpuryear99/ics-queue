
export default function AdminMainData({num_Users, time_usage, scheduled_App, curr_Proj}) {
    return (
    <div style={{ background: "#f5f5f5", 
                width: "400px", 
                margin: "20px",
                border: "2px solid #000000",
                alignItems: "center",
                padding: "20px",
                }}>
       <h1>Admin Data</h1>
       <h3>Number of Users: {num_Users}</h3>
       <h3>Time Used: {time_usage}</h3>
       <h3>Number of Scheduled Appointments: {scheduled_App}</h3>
       <h3>Number of Current Projects Running: {curr_Proj}</h3>


    </div>
    );
}
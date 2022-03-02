
export default function Appointment({name, day}) {
    return (
    <div style={{ background: "#f5f5f5", 
                width: "200px", 
                margin: "25px",
                border: "2px solid #000000",
                alignItems: "center" }}>
       <h3>{name}</h3>
       <h4>{day}</h4>
    </div>
    );
}
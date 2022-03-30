
export default function Machine({machine}) {
    console.log(machine);
    return (
    <div style={{ background: "#f5f5f5", 
                width: "200px", 
                margin: "25px",
                border: "2px solid #000000",
                alignItems: "center" }}>
       <h3>{machine["name"]}</h3>
       <h4>{machine["description"]}</h4>
    </div>
    );
}
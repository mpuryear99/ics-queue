const fs = require('fs');

let rawdata = fs.readFileSync('./orig_machines.json');
let orig = JSON.parse(rawdata);

function rand(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

let machines = orig.machines.flatMap(x => {
    const { number, ...entry } = x;
    
    let ml = []
    for (i = 1; i <= number; i++) {
      let _id = rand(1000000, 9999999);
      let m = {_id, ...entry};

      if (number > 1) {
        m.name += ` (${i})`
      }
      
      ml.push(m)
    }
    
    return (ml)
})

jsonobj = JSON.stringify(machines)
fs.writeFileSync('./machines.json', jsonobj, 'utf8');

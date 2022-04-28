import moment from "moment-timezone";
import momentRandom from "moment-random";
import machines from './machines.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const g = machines.map(m => {
    return ({
      m_id: m._id,
    });
  });

export default function genAppointments(numAppointments){

let items = [];

    for(let i = 0; i < numAppointments; i++){


        let _id = getRandomInt(500);

        let machine_id = g[getRandomInt(52)].m_id;

        let user_id = getRandomInt(500);

        let username = String(_id);

        // //End of Day
        // let eod = moment().endOf('day').unix();
        // //Start of Day
        // let sod = moment().startOf('day').unix();
        const TZ_NY = "America/New_York";

        let start = moment().tz(TZ_NY, true).startOf('day');
        let end = moment().tz(TZ_NY, true).endOf('day');
        
        //generate random times between the beginning and end of the day
        let startTime = momentRandom(end, start);
        let endTime = momentRandom(end, startTime);

        console.log(startTime);
        console.log(endTime);
        
        let appointment = {_id, machine_id, user_id, username, startTime, endTime};
        
        items.push(appointment);
    }

    return items;
}

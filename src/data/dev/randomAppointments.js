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
let users = ['user1', 'user2', 'user3', 'admin1', 'admin2', 'admin3']

    for(let i = 0; i < numAppointments; i++){


        let _id = getRandomInt(500);

        let machine_id = g[getRandomInt(15)].m_id;

        let user_id = getRandomInt(500);

        let username = users[getRandomInt(5)];

        //Eastern Time
        const TZ_NY = "America/New_York";

        //start of day
        let start = moment().tz(TZ_NY, true).startOf('day').add(8, 'hours');
        //end of day
        let end = moment().tz(TZ_NY, true).endOf('day');
        let endOfShift = moment().tz(TZ_NY, true).endOf('day').add(-7, 'hours');
        
        //generate random times between ICS opening time and ICS closing time
        let startTime = momentRandom(endOfShift, start);
        //appointments started before ICS closing time can be ran past closing time
        let endTime = momentRandom(end, startTime);

        for(let j = 0; j < items.length; j++){
          if(items[j].machine_id === machine_id){
            if(startTime > items[j].startTime && startTime < items[j].endTime){
              startTime = momentRandom(endOfShift, items[j].startTime);
              endTime = momentRandom(end, startTime);

            }
          }
        }
        
        let appointment = {_id, machine_id, user_id, username, startTime, endTime};
        
        items.push(appointment);
    }

    return items;
}

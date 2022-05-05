import React from "react";
//import logobobisvg from '../media/logo-bobi.svg';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import 'scss/components/timeline.scss';
import DBService from "data/DBService";
import moment from "moment-timezone";
import genAppointments from 'data/dev/randomAppointments';

const TZ_NY = "America/New_York";

let start = moment().tz(TZ_NY).startOf('day');
let end = moment().tz(TZ_NY).endOf('day');

const Scheduler = (props) => {

  const [machineList, setMachineList] = React.useState([]);
  const [appointmentList, setAppointmentList] = React.useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    (async () => {
      let ml = await DBService.getMachines();
      if (isSubscribed)
        setMachineList(ml);
      
      let startAfter = moment().tz(TZ_NY).startOf("day");
      let startBefore = startAfter.clone().add(1, "days");

      let al = await DBService.getAppointmentsByQuery({
        startBefore: startBefore.unix(), 
        startAfter: startAfter.unix()
      });

      al.forEach(a => {
        a.startTime = moment.unix(a.startTime).tz(TZ_NY);
        a.endTime = moment.unix(a.endTime).tz(TZ_NY);
      });

      //al = [...al, ...genAppointments(18)];
      if (isSubscribed)
        setAppointmentList(al);
    })();
    return () => isSubscribed = false;
  }, []);

  console.log(props)

  return(    
    <Timeline
      groups={machineList}
      items={appointmentList}
      keys={{
        groupIdKey: '_id',
        groupTitleKey: 'name',
        //groupRightTitleKey: 'rightTitle',
        itemIdKey: '_id',
        itemTitleKey: 'username',    // key for item div content
        //itemDivTitleKey: 'title',  // key for item div title (<div title="text"/>)
        itemGroupKey: 'machine_id',
        itemTimeStartKey: 'startTime',
        itemTimeEndKey: 'endTime',
      }}

      //This combination of start and end times properly shows one full 24 hour day
      visibleTimeStart={moment().tz(TZ_NY).startOf('day')}
      visibleTimeEnd={moment().tz(TZ_NY).endOf('day')}
      
      //disable zoom
      minZoom = {end-start}
      maxZoom = {end-start}
    />
  )
};

export default Scheduler;
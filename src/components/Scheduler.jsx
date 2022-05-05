import React from "react";
//import logobobisvg from '../media/logo-bobi.svg';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import '../scss/components/timeline.scss';
import DBService from "../data/DBService";
import moment from "moment";


const test_items = [
  {
    //Event Number
    _id: 1,
    machine_id: "9873710",
    user_id: 300,
    username: "1",
    startTime: moment().unix(),
    endTime: moment().add(3, 'hour').unix(),
  },
  {
    _id: 2,
    machine_id: "9971991",
    user_id: 255,
    username: "2",
    startTime: moment().unix(),
    endTime: moment().add(2, 'hour').unix(),
  },
  {
    _id: 3,
    machine_id: "5205119",
    user_id: 155,
    username: "3",
    startTime: moment().unix(),
    endTime: moment().add(1, 'hour').unix(),
  }
]


const Scheduler = () => {

  const [machineList, setMachineList] = React.useState([]);
  const [appointmentList, setAppointmentList] = React.useState([]);
  // const [calendarItems, setCalendarItems] = React.useState([]);
  // const [calendarGroups, setCalendarGroups] = React.useState([]);

  React.useLayoutEffect(() => {
    (async () => {
      let ml = await DBService.getMachines();
      setMachineList(ml);
      
      let startAfter = moment().startOf("day");
      let startBefore = startAfter.clone().add(1, "days");

      let al = await DBService.getAppointmentsByQuery({startBefore, startAfter});
      al = [...al, ...test_items]
      al.forEach(appt => {
        appt.startTime *= 1000;
        appt.endTime *= 1000;
      })
      setAppointmentList(al);

    })();
  }, []);

  // React.useLayoutEffect(() => {
    
  //   const g = machineList.map(m => {
  //     return ({
  //       id: m._id,
  //       title: m.name,
  //     });
  //   });

  //   setCalendarGroups(g);
    
  // }, [machineList]);

  // React.useLayoutEffect(() => {
    
  //   const i = appointmentList.map(a => {
  //     return ({
  //       id: a._id,
  //       title: a.username,
  //       group: a.machine_id,
  //       start_time: moment.unix(a.startTime),
  //       end_time: moment.unix(a.endTime),
  //     });
  //   });
    
  //   setCalendarItems(i);
    
  //}, [appointmentList]);

//console.log(calendarItems);

  return(
    <Timeline
      // groups={calendarGroups}
      // items={calendarItems}
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
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  )
};

export default Scheduler;
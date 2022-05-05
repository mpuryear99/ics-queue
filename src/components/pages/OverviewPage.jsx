import React from "react";
//import logobobisvg from '../media/logo-bobi.svg';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import '../../scss/components/timeline.scss';
import DBService from "../../data/DBService";
import moment from "moment";
import genAppointments from '../../data/dev/randomAppointments';

const test_items = genAppointments(18);
let start = moment().startOf('day');
let end = moment().endOf('day');

const Scheduler = () => {

  const [machineList, setMachineList] = React.useState([]);
  const [appointmentList, setAppointmentList] = React.useState([]);

  React.useLayoutEffect(() => {
    (async () => {
      let ml = await DBService.getMachines();
      setMachineList(ml);
      
      let startAfter = moment().startOf("day");
      let startBefore = startAfter.clone().add(1, "days");

      let al = await DBService.getAppointmentsByQuery({startBefore, startAfter});
      al = [...al, ...test_items]

      setAppointmentList(al);

    })();
  }, []);

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

      //This combination of start and end times properly shows one full 24 hour day
      visibleTimeStart={moment().endOf('day').valueOf()}
      visibleTimeEnd={moment().endOf('day').add(24, 'hours').valueOf()}

      //disable zoom
      minZoom = {end-start}
      maxZoom = {end-start}


    />
  )
};

export default Scheduler;
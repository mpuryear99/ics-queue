import React from "react";
import DBService from "../../data/DBService";

// MUI
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// MUI Lab
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DatePicker from '@mui/lab/DatePicker';
// import TimePicker from '@mui/lab/TimePicker';
// Moment
import moment from "moment";


function generateTimes(start, end, step) {
  let times = [start];
  while(true) {
    let t = times[times.length - 1].clone();
    t.add(step);
    if (t > end)
      break;
    times.push(t);
  }
  return times;
}


const ApptForm = () => {
  const [formData, setFormData] = React.useState({
    machine: '',
    duration: '',
    date: '',
    time: '',
  });

  const [validStatus, setValidStatus] = React.useState({
    dateValid: true,
    timeValid: true,
    allValid: true,
  });

  const [machineList, setMachineList] = React.useState(undefined);

  React.useEffect(async () => {
    let ml = await DBService.getMachines();
    console.log("ML", ml);
    setMachineList(ml);
  }, []);

  let machineOptionMenuItems = React.useMemo(() => {
    if (machineList !== undefined) {
      return machineList.map(m => <MenuItem key={m._id} value={m}>{m.name}</MenuItem>);
    } else return [];
  }, [machineList]);

  
  let timeOptionMenuItems = React.useMemo(() => {
    let minTime = moment("0800", "hmm");
    let maxTime = moment("1700", "hmm");
    // NOTE: Parameters minTime, maxTime cannot be at the root of this component.
    //  If you do this, the params change each render causing this memo to run creating all new Moment objects.
    //  This is a problem because the Moment objects created here are used as MenuItems in a <Select>.
    //  On rerender, the selected Moment value becomes stale and as it no longer is in the list of MenuItems.
    //    (selecting a value will fire a render, and the onChange method will use the stale value - same problem)
    //  Moral of the story, don't regenerate this list while you have a Moment object as a value.
    //  If list is regenerated, the value associated with the <Select> (formData.value) needs a new valid value or "".

    let times = generateTimes(minTime, maxTime, { minutes: 30 });
    let items = times.map(t => <MenuItem key={t.format().toString()} value={t}>{t.format("h:mm A").toString()}</MenuItem>)
    return items;
  }, []);


  const handleDateError = (err) => {
    let valid = (err === null);
    let status = {
      ...validStatus,
      dateValid: valid
    };
    setValidStatus(status);
  }

  const handleDateTimeError = (field, err) => {
    let isValid = (err === null);
    let newVS = {...validStatus, allValid: true};
    switch (field) {
      case "date":
        newVS.dateValid = isValid;
        break;
      case "time":
        newVS.timeValid = isValid;
        break;
      default:
        return;
    }
    newVS.allValid = Object.values(newVS).every(x => x === true);
    setValidStatus(newVS);
  }
  
  
  const handleMachineChange = (event) => {
    let fd = {
      ...formData,
      machine: event.target.value,
      date: '',
      time: '',
    }
    setFormData(fd);
  }

  const handleDurationChange = (event) => {
    let fd = {
      ...formData,
      duration: event.target.value,
      time: '',
    }
    setFormData(fd);
  }

  const handleDateChange = (newValue) => {
    let fd = {
      ...formData,
      date: newValue,
      time: '',
    }
    setFormData(fd);
  }

  const handleTimeChange = (event) => {
    let fd = {
      ...formData,
      time: event.target.value,
    }
    console.log(fd.time);
    setFormData(fd);
  }

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={machineList === undefined}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="machine-select-label">Machine</InputLabel>
        <Select
          labelId="machine-select-label"
          label="Machine"
          value={formData.machine}
          onChange={handleMachineChange}
        >
          {machineOptionMenuItems}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="duration-select-label">Length of Job</InputLabel>
        <Select
          labelId="duration-select-label"
          label="Length of Job"
          value={formData.duration}
          onChange={handleDurationChange}
        >
          <MenuItem key={30} value={30}>0:30</MenuItem>
          <MenuItem key={60} value={60}>1:00</MenuItem>
          <MenuItem key={90} value={90}>1:30</MenuItem>
          <MenuItem key={120} value={120}>2:00</MenuItem>
          <MenuItem key={150} value={150}>2:30</MenuItem>
          <MenuItem key={180} value={180}>3:00</MenuItem>
        </Select>
        <FormHelperText>Format: (H:MM)</FormHelperText>
      </FormControl>
      
      <FormControl fullWidth sx={{m:1}}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Date"
            inputFormat="MM/DD/yyyy"
            mask="__/__/____"
            minDate={moment().startOf("day")}
            value={formData.date}
            onChange={handleDateChange}
            onError={handleDateError}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="time-start-select-label">Time</InputLabel>
        <Select
          labelId="time-start-select-label"
          label="Time"
          value={formData.time}
          onChange={handleTimeChange}
        >
          {timeOptionMenuItems}
        </Select>
      </FormControl>
    </>
  );
}

export default ApptForm;
import React from "react";
import DBService from "../../data/DBService";

// MUI
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
//import FormHelperText from "@mui/material/FormHelperText";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
// MUI Lab
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DatePicker from '@mui/lab/DatePicker';
// Moment
import moment from "moment-timezone";


function generateTimes(start, end, step) {
  let times = [start.clone()];
  while(true) {
    let t = times[times.length - 1].clone();
    t.add(step);
    if (t > end)
      break;
    times.push(t);
  }
  return times;
}

function durationToString(t) {
  let h = t.hours().toString();
  let m =  t.minutes().toString().padStart(2,0);
  return `${h} hr, ${m} min`;
}

function combineDateTime(date, time) {
  let newDate = moment(date).tz("America/New_York", true);
  newDate.set({
    hour: time.get('hour'),
    minute: time.get('minute'),
    second: 0, //time.get('second'),
    millisecond: 0, //time.get('millisecond'),
  });
  return newDate;
}

function checkForApptCollision(appt1, appt2) {
  return (appt1.startTime < appt2.endTime && appt2.startTime < appt1.endTime);
}

function createApptFromForm(formData) {
  let t1 = combineDateTime(formData.date, formData.time);
  let t2 = t1.clone().add(formData.duration);
  let appt = {
    machine_id: formData.machine._id,
    user_id: "625e2d8636e9dfe23304068e",
    username: "user1",
    startTime: t1.unix(),
    endTime: t2.unix(),
  }
  return appt;
}

const ApptForm = () => {
  //#region useState hooks
  const [formData, setFormData] = React.useState({
    machine: null,
    duration: '',
    date: null,
    time: '',
  });

  const [machineList, setMachineList] = React.useState(undefined);

  const [apptList, setApptList] = React.useState([]);

  const [statusInfo, setStatusInfo] = React.useState({
    dateValid: true,
    canSubmit: false,
    submitPending: false,
    status: null,
    message: ""
  });
  //#endregion

  let timeOptionMenuItems = React.useMemo(() => {
    let minTime = moment.tz("0800", "hmm", "America/New_York");
    let maxTime = moment.tz("1700", "hmm", "America/New_York");
    // NOTE: Parameters minTime, maxTime cannot be at the root of this component.
    //  If you do this, the params change each render causing this memo to run creating all new Moment objects.
    //  This is a problem because the Moment objects created here are used as MenuItems in a <Select>.
    //  On rerender, the selected Moment value becomes stale and as it no longer is in the list of MenuItems.
    //    (selecting a value will fire a render, and the onChange method will use the stale value - same problem)
    //  Moral of the story, don't regenerate this list while you have a Moment object as a value.
    //  If list is regenerated, the value associated with the <Select> (formData.value) needs a new valid value or "".

    let times = generateTimes(minTime, maxTime, { minutes: 30 });
    let items = times.map(t => <MenuItem key={t.format()} value={t}>{t.format("h:mm A")}</MenuItem>)
    return items;
  }, []);

  let durationMenuItems = React.useMemo(() => {
    let minDur = moment.duration(30, "minutes");
    let maxDur = moment.duration(8, "hours");
    let step   = moment.duration(30, "minutes");

    let times = generateTimes(minDur, maxDur, step);
    let items = times.map(t => (<MenuItem key={t.toString()} value={t}>{durationToString(t)}</MenuItem>));
    return items;
  }, []);

  // Get machine list
  React.useLayoutEffect(() => {
    (async () => {
      let ml = await DBService.getMachines();
      setMachineList(ml);
    })();
  }, []);

  // Get appointment list
  React.useLayoutEffect(() => {
    if (formData.machine == null || !statusInfo.dateValid || !moment.isMoment(formData.date)) {
      setApptList([]);
      return;
    }

    let date = moment(formData.date).startOf('day').tz("America/New_York", true);
    let query = {
      startAfter: date.unix(),
      startBefore: date.add(1, 'days').unix(),
      machine_id: formData.machine._id
    }
    DBService.getAppointmentsByQuery(query)
      .then(appts => {
        if (appts === undefined) {
          alert("Warning: Unable to query booked appointments for selected data/machine. Displayed appointments may be inaccurate.");
        }
        setApptList(appts ?? []);
      });
  }, [formData.machine, formData.date, statusInfo.dateValid])


  // Verify all schedule form info
  React.useLayoutEffect(() => {
    let fieldsValid = formData.machine != null
      && statusInfo.dateValid
      && moment.isMoment(formData.time)
      && moment.isMoment(formData.date)
      && moment.isDuration(formData.duration);
    setStatusInfo(s => ({...s, canSubmit: fieldsValid}))
  }, [formData, statusInfo.dateValid]);


  //#region Change, Error, & Submit Handlers

  const handleDateError = (err) => {
    let valid = (err === null);
    setStatusInfo(s => ({
      ...s,
      dateValid: valid,
    }));
  }

  /**
   * Callback fired when the machine value changes for {@link Autocomplete.onChange}.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  const handleMachineChange = (event, value, reason, details) => {
    if (reason !== "selectOption" && reason !== "clear")
      return;

    setFormData(fd => ({
      ...fd,
      machine: value,
    }));
  }

  const handleDurationChange = (event) => {
    setFormData(fd => ({
      ...fd,
      duration: event.target.value,
    }));
  }

  const handleDateChange = (newValue) => {
    setFormData(fd => ({
      ...fd,
      date: newValue,
    }));
  }

  const handleTimeChange = (event) => {
    setFormData(fd => ({
      ...fd,
      time: event.target.value
    }));
  }

  const handleSubmit = (event) => {
    // Create appt from form data
    try {
      var appt = createApptFromForm(formData)
    } catch (e) {
      setStatusInfo(s => ({...s,
        status: "error",
        message: `Appointment submittion error. (${e.message})`,
      }));
      return;
    }

    // Check for appt collision with other appt for selected day
    let apptTimeValid = apptList.length === 0 || apptList.every((testAppt) => !checkForApptCollision(appt, testAppt));
    if (!apptTimeValid) {
      setStatusInfo(s => ({...s,
        status: "warning",
        message: "Appointment timeslot not available.",
      }));
      return;
    }

    // Attempt to submit appt
    setStatusInfo(s => ({...s, submitPending: true}));
    let finalStatus = {...statusInfo, submitPending: false};
    DBService.postAppointment(appt)
      .then((_id) => {
        if (_id == null)
          throw new Error("Unable to submit appointment.");
        appt._id = _id;
        setApptList([...apptList, appt]);
        finalStatus.status = "success";
        finalStatus.message = "Appointment submitted. Feel free to submit another."
      })
      .catch((e) => {
        finalStatus.status = "error";
        finalStatus.message = e.toString();
      })
      .finally(() => {
        setStatusInfo(finalStatus);
      });
  }

  //#endregion

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={machineList === undefined}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Autocomplete
        fullWidth
        sx={{m:1}}
        disablePortal
        autoHighlight
        options={(machineList ?? [])}
        value={formData.machine}
        onChange={handleMachineChange}
        getOptionLabel={(option) => option.name ?? option._id ?? option}
        renderInput={(params) => <TextField {...params} label="Machine" />}
      />

      <FormControl fullWidth sx={{m:1}}>
        <InputLabel id="duration-select-label">Length of Job</InputLabel>
        <Select
          labelId="duration-select-label"
          label="Length of Job"
          value={formData.duration}
          onChange={handleDurationChange}
        >
          {durationMenuItems}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{m:1}}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Date"
            inputFormat="MM/DD/yyyy"
            mask="__/__/____"
            minDate={moment().startOf("day").tz("America/New_York", true)}
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

      <LoadingButton
        sx={{m:1}}
        loading={statusInfo.submitPending}
        variant="contained"
        disabled={!statusInfo.canSubmit}
        //type="submit"
        //onSubmit
        onClick={handleSubmit}
      >
        Submit Appointment
      </LoadingButton>

      <Alert
        sx={{m:1, display: (statusInfo.status == null ? "none" : "default")}}
        severity={statusInfo.status || "info"}
      >
        {statusInfo.message}
      </Alert>
    </div>
  );
}

export default ApptForm;
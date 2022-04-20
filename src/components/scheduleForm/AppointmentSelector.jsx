import React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


const steps = [
  {
    label: 'Select a Machine or Item'
  },
  {
    label: 'Choose a Timeslot'
  }, 
  {
    label: 'Confirm Selection'
  }
]

const MachineSelect = ({handleChange, formData}) => {
  console.log("MS", formData);
  return(
    <TextField
      placeholder="Machine"
      label="Machine"
      onChange={handleChange('machine')}
      defaultValue={formData.machine}
    />
  )
}

const SelectionConfirmation = ({handleChange, formData}) => {
  return(
    <Paper>
      {Object.keys(formData).map((val,idx) => {
        return (
          <p>{val}: {formData[val]}</p>
        );
      })}
    </Paper>
  )
}


export default function AppointmentSelector() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    machine: '',
    number: 1,
    startTime: '',
    endTime: '',
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    switch (activeStep) {
      case 1:
        let fd = formData;
        fd.number = 1;
        fd.startTime = '';
        fd.endTime = '';
        setFormData(fd);
        break;
      default:
        break;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // handle field change
  const handleChange = input => e => {
    //console.log("TEST", input, e.target.value);
    //this.setState({ [input]: e.target.value });
    setFormData({ [input]: e.target.value })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          
          {activeStep === 0 ? (<MachineSelect handleChange={handleChange} formData={formData}/>) : null}
          {activeStep === 2 ? (<SelectionConfirmation handleChange={handleChange} formData={formData}/>) : null}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

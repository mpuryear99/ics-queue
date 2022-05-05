import React from 'react';
import tommy from 'media/tommy.jpg'
import 'App.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="App">
        <h1>Welcome to the ICS Scheduler!</h1> 
        <div style={{display: 'inline'}}>
        <div className='blue'>   
        The Innovation and Collaboration Studio (ICS) is in the process of moving to the new Zeanah Engineering complex. There will be a much larger workshop consisting of more machines to manage.       
          This website is intended to allow a student to submit, view, and delete appointments for machines, reducing the amount of staff required to manage the ICS. Admins are able to manage student appointments and view usage statistics for each of the machines.

          <h2>Features</h2>
        <ul>
          <li><Link to='/schedule'>Schedule an appointment</Link></li>  
          <li><Link to='/overview'>View Appointments</Link></li>
          <li><Link to='/admin'>Admin tools</Link></li>
          <li><Link to='/portal'>Student tools</Link></li>
        </ul> 
        </div>
        <div className='white'>        
          <img src={tommy} alt='Our lord and savior' title='Our lord and savior' style={{width: '50%'}}></img>
        </div>


      
      </div>
    </div>
  );
}

export default HomePage;

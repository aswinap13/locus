import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  classes from './userhome.module.css';
import AboutUser from './AboutUser';
import Instructions from '../user/Instructions';
import Status from '../user/Status';


 const UserHome=() => {
 
  
  return (
    <div className={classes.mainuserhome}>
        <img src={require('../img/locuscetlogo.png')} className={classes.logoimg}></img>
      <div className={`${classes.userhome} container`}>
      <div className="row usercontent md-12">
        <div className="userdetails col-md-4">
          <AboutUser/>
        </div>
        <div className="examdetails col-md-8">
          
          <Instructions/>
          {/* <Status/> */}
        </div>
        <button className={`${classes.takemeto} btn`}>Take me to exam!!!</button>
      </div>
      
    </div>
    </div>
    
  )
 }
 export default UserHome;
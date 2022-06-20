import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  classes from './userhome.module.css';

 const Status=() => {
 
  
  return (
      <div className={classes.subjects}>
          <div className={classes.maths}>
              <h4>Mathematics</h4>
              <h5>Total Number of questions : </h5>
              <br/>
              <h5>Number of Questions answered : </h5>
              <br/>
              <h5>Number of correct answers : </h5>
              <br/>
              <h5>Number of Incorrect answers : </h5>

              <br/>
              <h5>Total Marks : </h5>
          </div>
          {/* <div className={classes.physics}>
              <h4>Physics</h4>
              <h5>Total Number of questions : </h5>
              <br/>
              <h5>Number of Questions answered : </h5>
              <br/>
              <h5>Number of correct answers : </h5>
              <br/>
              <h5>Number of Incorrect answers : </h5>

              <br/>
              <h5>Total Marks : </h5>
            </div>
          <div className={classes.chemistry}>
              <h4>Chemistry</h4>
              <h5>Total Number of questions : </h5>
              <br/>
              <h5>Number of Questions answered : </h5>
              <br/>
              <h5>Number of correct answers : </h5>
              <br/>
              <h5>Number of Incorrect answers : </h5>

              <br/>
              <h5>Total Marks : </h5>
            </div> */}
      </div>
  )
}
export default Status;
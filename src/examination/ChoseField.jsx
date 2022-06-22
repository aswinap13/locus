import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';
import Maths from './Maths'
import Chemistry from './Chemistry'
import Physics from './Physics'

 const ChoseField=() => {
 
  
  return ( 
        <div className={classes.choseField}>
            <div className={`${classes.subjects} row`}>
                <button className={`col-md-4`}>Maths</button>
                <button className={`col-md-4`}>Physics</button>
                <button className={`col-md-4`}>Chemistry</button>
            </div>
            <div className={`${classes.questionSec} row`}>
                <Maths/>
                {/* <Physics/>
                <Chemistry/> */}
            </div>
        </div>
    )
        }
export default ChoseField;
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';
import Maths from './Maths'
import Chemistry from './Chemistry'
import Physics from './Physics'

 const ChoseField=({ subjects }) => {
 
  
  return ( 
        <div className={classes.choseField}>
            <div className={`${classes.subjects} row`}>
                { subjects.map(subject => (
                    <button key={subject.id} className={`col-md-4`}>{ subject.name }</button>
                ))}
                {/* <button className={`col-md-4`}>Maths</button>
                <button className={`col-md-4`}>Physics</button>
                <button className={`col-md-4`}>Chemistry</button> */}
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
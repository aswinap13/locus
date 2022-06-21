import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  '../user/userhome.module.css';
import classes from  './examination.module.css';
import Timer from './Timer';
import Question from './Question';
import ChoseField from './ChoseField';

 const ExamControl=() => {
 
  
  return ( 
        <div className={classes.examcontrol}>
            <div className={classes.head}>
                <logo>
                <img src={require('../img/locuscetlogo.png')} className={styles.logoimg}></img>
                </logo>
                <Timer/>
            </div>
            <div className={classes.body}>
                <Question/>
                <ChoseField/>
            </div>
            <div className={classes.footer}>
                <button className={`${classes.btn} btn btn-warning`}>Mark For Review</button>
                <button className={`${classes.btn} btn btn-info`}>Save and Next</button>
                <button className={`${classes.btn} btn btn-primary`}>Next</button>
                <button className={`${classes.btn} btn btn-success`}>Submit Test</button>
            </div>
            
        </div>
    )
        }
export default ExamControl;
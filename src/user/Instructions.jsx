import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  classes from './userhome.module.css';

 const Instructions=() => {

  return (
      <div className={classes.instructions}>
        <ul>
            <li>There are 120 Questions in Both sections : Maths and Physics & Chemistry</li>
            <li>Once You click the Start Exam button, <b>Do not Refresh </b>or<b> Press Back Button</b> , as it will result in deleting your <b>Current Progress</b> as well as denying further <b>Exam Access.</b></li>
            <li>The Timer will automatically submit your exam once it is over!</li>
            <li>There's a negetive marking of -1 for each incorrect answer you Save, so Answer Responsibly.</li>
            <li>You can access any question at any time of test, by chosing it in the menu given in right side of exam page.</li>
            <li>Choosing <b>Next Button Won't Save</b> Your Answer Option!</li>
            <li>Make sure that you click <b>Save and Next</b> for Selecting an option as an answer.</li>
        </ul>

      </div>
  )
}
export default Instructions;

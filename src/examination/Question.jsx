import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';

 const Question=() => {
  
  return ( 
        <div className={classes.question}>
            <div className={classes.currentQues}>
            <h3>What's Photosynthesis?</h3>
            
            <div className={classes.options}>
                <div className={classes.option}>
                    <input type='radio' id="optionA" name="options"/>
                    <label for="lname">A : Aswin</label>
                </div>
               <div className={classes.option}>
                <input type='radio' id="optionB" name="options"/>
                    <label for="lname">B : Aswin</label>
               </div>
                <div className={classes.option}>
                    <input type='radio' id="optionC" name="options"/>
                    <label for="lname">C : Aswin</label>
                </div>
               <div className={classes.option}>
               <input type='radio' id="optionD" name="options"/>
                <label for="lname">D : Aswin</label>
               </div>
            </div>
            </div>
        </div>


    )
        }
export default Question;




import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';

 const Question=({ queindex, subindex, subjects, setCurrentoption }) => {

    const question = subjects[subindex].questions[queindex];

    const handleOptionChange = (e) => {
        setCurrentoption(e.target.value);
    }
  
  return ( 
        <div className={classes.question}>
            <div className={classes.currentQues}>
            { question && <h3>{question.question_no}.  {question.title}</h3>}
            
            <div className={classes.options} onChange={handleOptionChange} value="D">
                <div className={classes.option}>
                    <input type='radio' id="optionA" name="options" value="A"/>
                    <label for="lname">A : {question.option_a}</label>
                </div>
               <div className={classes.option}>
                <input type='radio' id="optionB" name="options" value="B"/>
                    <label for="lname">B : {question.option_b}</label>
               </div>
                <div className={classes.option}>
                    <input type='radio' id="optionC" name="options" value="C"/>
                    <label for="lname">C : {question.option_c}</label>
                </div>
               <div className={classes.option}>
               <input type='radio' id="optionD" name="options" value="D"/>
                <label for="lname">D : {question.option_d}</label>
               </div>
            </div>
            </div>
        </div>


    )
        }
export default Question;




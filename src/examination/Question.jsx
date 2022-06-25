import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';

 const Question=({ question, currentoption, setCurrentoption}) => {

    const handleOptionChange = (e) => {
        setCurrentoption(e.target.value);
    }
  
  return ( 
        <div className={classes.question}>
            <div className={classes.currentQues}>
            { question && <h3>{question.question_no}.  {question.title}</h3>}
            
            <div className={classes.options} onChange={handleOptionChange}>
                <div className={classes.option}>
                    <input type='radio' id="optionA" name="options" value="A" checked={currentoption === "A"}/>
                    <label for="lname">A : {question.option_a}</label>
                </div>
               <div className={classes.option}>
                <input type='radio' id="optionB" name="options" value="B" checked={currentoption === "B"}/>
                    <label for="lname">B : {question.option_b}</label>
               </div>
                <div className={classes.option}>
                    <input type='radio' id="optionC" name="options" value="C" checked={currentoption === "C"}/>
                    <label for="lname">C : {question.option_c}</label>
                </div>
               <div className={classes.option}>
               <input type='radio' id="optionD" name="options" value="D" checked={currentoption === "D"}/>
                <label for="lname">D : {question.option_d}</label>
               </div>
            </div>
            </div>
        </div>


    )
        }
export default Question;




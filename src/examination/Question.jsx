import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';
var Latex = require('react-latex');

 const Question=({ question, currentoption, setCurrentoption}) => {
    const fraction = `What does $$x=\\frac{-b+\\sqrt{b^2-4ac}}{2a}$$ give?`

    const handleOptionChange = (e) => {
        setCurrentoption(e.target.value);
    }
  
  return ( 
        <div className={classes.question}>
            <div className={classes.currentQues}>
            { question && <h4>{question.question_no}. <Latex>{question.title}</Latex></h4>}
            
            <div className={classes.options} onChange={handleOptionChange}>
                <div className={classes.option}>
                    <input type='radio' id="optionA" name="options" value="A" checked={currentoption === "A"}/>
                    <label for="lname">A : <Latex>{question.option_a}</Latex></label>
                </div>
               <div className={classes.option}>
                <input type='radio' id="optionB" name="options" value="B" checked={currentoption === "B"}/>
                    <label for="lname">B : <Latex>{question.option_b}</Latex></label>
               </div>
                <div className={classes.option}>
                    <input type='radio' id="optionC" name="options" value="C" checked={currentoption === "C"}/>
                    <label for="lname">C : <Latex>{question.option_c}</Latex></label>
                </div>
               <div className={classes.option}>
               <input type='radio' id="optionD" name="options" value="D" checked={currentoption === "D"}/>
                <label for="lname">D : <Latex>{question.option_d}</Latex></label>
               </div>
               <div className={classes.option}>
               <input type='radio' id="optionE" name="options" value="E" checked={currentoption === "E"}/>
                <label for="lname">E : <Latex>{question.option_e}</Latex></label>
               </div>
            </div>
            </div>
        </div>


    )
        }
export default Question;




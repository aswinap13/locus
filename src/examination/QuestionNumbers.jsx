import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';

 const QuestionNumbers=({ questions, num_questions, setqueindex, marked }) => {

  const quesnum_array = [...Array(num_questions).keys()]

  const handleNumclick = (e) => {
    e.preventDefault();
    const quenum = parseInt(e.target.innerText)
    setqueindex(quenum - 1); // this works strictly by the fact that each question number is successor of its index .ie, at 0th index is question 1 
  }
  
  return ( 
        <div className={`${classes.Maths} row`}>
            { quesnum_array.map(num => (  
               <button 
                    key={num}
                    className={`${classes.questionChose} col-md-1 ${marked.includes(questions[num].id) ? classes.marked : ""}`} 
                    onClick={handleNumclick}>
                { num + 1 }</button>
            ))}
        </div>
    )
}
export default QuestionNumbers;













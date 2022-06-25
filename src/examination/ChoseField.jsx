import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './examination.module.css';
// import Maths from './Maths'
// import Chemistry from './Chemistry'
// import Physics from './Physics'
import QuestionNumbers from './QuestionNumbers';

const ChoseField=({ answers, subjects, subindex, setsubindex, setqueindex, marked }) => {

  const handleSubjectbtn = (e, id) => {
    e.preventDefault();
    const subind = subjects.findIndex(sub => (sub.id === id))
    if (subind !== -1) {
        setsubindex(subind);
        setqueindex(0); // resetting queindex after changing subindex
    }
  }  
 
  
  return ( 
        <div className={classes.choseField}>
            <div className={`${classes.subjects} row`}>
                { subjects.map(subject => (
                    <button 
                        key={subject.id}
                        className={`col-md-12 ${subjects.findIndex(sub => (sub.id === subject.id)) === subindex ? classes.subactive : ""}`} 
                        onClick={(e) => handleSubjectbtn(e, subject.id)}
                        >{ subject.name }</button>
                ))}
            </div>
            <div className={`${classes.questionSec} row`}>
                <QuestionNumbers 
                    answers={answers}
                    questions={subjects[subindex].questions}
                    num_questions={subjects[subindex].questions.length}
                    subindex={subindex}
                    setqueindex={setqueindex}
                    marked={marked}
                />
            </div>
        </div>
    )
}

export default ChoseField;
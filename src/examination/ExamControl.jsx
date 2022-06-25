import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  '../user/userhome.module.css';
import classes from  './examination.module.css';
import Timer from './Timer';
import Question from './Question';
import ChoseField from './ChoseField';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ExamControl=() => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [exam, setExam] = useState();
    const [currentsub, setCurrentsub] = useState(0);
    const [currentque, setCurrentque] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentoption, setCurrentoption] = useState();
    const [marked, setMarked] = useState([]);

    let token;

    if (localStorage.getItem('locus-token') === null) {
        navigate('/Login');
    } else {
        token = localStorage.getItem('locus-token');
    }

    const abortCont = new AbortController();

    const options = {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `token ${token}`
        },
        signal:abortCont.signal
    }

    const fetchExam = () => {
        fetch(`http://locusback.herokuapp.com/exam/active/${id}`, options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.text().then(text => {throw new Error(text)})
                }
            }).then(data => {
                setExam(data);
            }).catch(error => {
                let err = JSON.parse(error.message)
                if (err.detail) {
                    alert('Please login again....');
                    navigate('/Login');
                } else if (err.Message) {
                    alert(err.Message);
                    navigate('/Home');
                } 
                else {
                    alert('Something occured, please refresh the page...');
                }
            })
    }

    const handleNext = (e) => {
        e.preventDefault();
        let num_questions = exam.subjects[currentsub].questions.length;
        let num_subjects = exam.subjects.length;
      
        if (currentque < num_questions - 1) {
            setCurrentque(currentque+1);
        } else if (currentsub < num_subjects - 1) {
            setCurrentsub(currentsub+1);
            setCurrentque(0);
        }   
        // add else for ui case for last question
    }

    const handleSaveNext = (e) => {
        e.preventDefault();
        let num_questions = exam.subjects[currentsub].questions.length;
        let num_subjects = exam.subjects.length;
        let question_id = exam.subjects[currentsub].questions[currentque].id;
        
        const answer_index = answers.findIndex(ans => (ans.id === question_id))
        if (answer_index === -1) {     
            setAnswers([...answers, {id: question_id, answer: currentoption}])
        } else {
            let newanswers = answers;
            newanswers[answer_index].answer = currentoption;
            setAnswers(newanswers);
        }

        if (currentque < num_questions - 1) {
            setCurrentque(currentque+1);
        } else if (currentsub < num_subjects - 1) {
            setCurrentsub(currentsub+1);
            setCurrentque(0);
        }
        // add else for ui case for last question
    }

    const handleSubmit = (e) => {
        if (e !== undefined) {
            e.preventDefault();
        }
        
        let question_id = exam.subjects[currentsub].questions[currentque].id;
        const answer_index = answers.findIndex(ans => (ans.id === question_id))
        let newanswers;
        if (answer_index === -1) { 
            newanswers = [...answers, {id: question_id, answer: currentoption}];
            setAnswers([...answers, {id: question_id, answer: currentoption}])
        } else {
            newanswers = answers;
            newanswers[answer_index].answer = currentoption;
            setAnswers(newanswers);
        }


        const postoptions = { 
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `token ${token}`
            },
            body: JSON.stringify(newanswers)
          }
    
          fetch(`http://locusback.herokuapp.com/exam/submit/${id}/`, postoptions)
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              return response.text().then(text => {throw new Error(text)})
            }
          }).then(data => {
            alert("You have submitted the exam !!");
            navigate('/Home');
          }).catch(err => {
            var err = JSON.parse(err.message)
            if (err.Message) {
              alert(err.Message);
              navigate('/Home');
            } else if (err.detail) {
              alert('Please login again....');
              navigate('/Login');
            } else {
              alert("Something occured...please try restarting the exam...");
              navigate('/Home');
            }
          })
    } 

    const handleMarked = (e) => {
        e.preventDefault();

        const question_id = exam.subjects[currentsub].questions[currentque].id;
        const markedindex = marked.findIndex(m => (m.id === question_id));
        if (markedindex === -1) {
            setMarked([...marked, question_id])
        } // else if already marked..unmark or do nothing ??
    }

    useEffect(() => {
        fetchExam();
    }, []) 

    useEffect(() => {
        if (exam !== undefined) {
            let num_questions = exam.subjects[currentsub].questions.length;
            if (currentque < num_questions) {
                let question_id = exam.subjects[currentsub].questions[currentque].id;
                const answer_index = answers.findIndex(ans => (ans.id === question_id))
                if (answer_index !== -1) {     
                    setCurrentoption(answers[answer_index].answer)
                } else {
                    setCurrentoption();
                }
            } else {
                setCurrentoption();
            }
        }
    }, [currentque, currentsub])

   return ( 
        <div className={classes.examcontrol}>
            <div className={classes.head}>
                <logo>
                <img src={require('../img/locuscetlogo.png')} className={styles.logoimg}></img>
                </logo>
                {exam && <h2 className={classes.title}>{exam.name}</h2>}
                {exam && <Timer/> }
            </div>
            
            <div className={classes.body}>
            { exam && <Question
                        question={exam.subjects[currentsub].questions[currentque]}
                        currentoption={currentoption}
                        setCurrentoption={setCurrentoption}
                        /> }
            { exam && <ChoseField
                        answers={answers}
                        subjects={exam.subjects}
                        subindex={currentsub}
                        setsubindex={setCurrentsub}
                        setqueindex={setCurrentque}
                        marked={marked}
                        /> }
            </div>
            <div className={classes.footer}>
                <button className={`${classes.btn} btn btn-warning`} onClick={handleMarked}>Mark For Review</button>
                <button className={`${classes.btn} btn btn-info`} onClick={handleSaveNext}>Save and Next</button>
                <button className={`${classes.btn} btn btn-primary`} onClick={handleNext}>Next</button>
                <button className={`${classes.btn} btn btn-success`} onClick={handleSubmit}>Submit Test</button>
            </div>
            
        </div>
    )
}

export default ExamControl;
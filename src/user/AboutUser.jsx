import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './userhome.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

 const AboutUser=() => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [exams, setExams] = useState([]);

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
    
    const fetchDetails = () => {
        fetch("http://locusback.herokuapp.com/users/details/", options)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.text().then(text => {throw new Error(text)})
            }
        }).then(data => {
            setName(data.first_name)
        }).catch(error => {
            let err = JSON.parse(error.message)
            if (err.detail) {
                alert('Please login again....');
                navigate('/Login');
            } else {
                alert('Something occured, please refresh the page...');
            }
        })
    }
    
    const fetchActiveExams = () => {
        fetch("http://locusback.herokuapp.com/exam/active/", options)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.text().then(text => {throw new Error(text)})
            }
        }).then(data => {
            setExams(data)
        }).catch(err => {
            var err = JSON.parse(err.message)
            if (err.detail) {
                alert('Please login again....');
                navigate('/Login');
            } else {
                alert('Something occured, please refresh the page...');
            }
        })
    }

    useEffect(() => {
        fetchDetails();
        fetchActiveExams();
    }, [])   
  
  return ( 
        <div className={classes.aboutuser}>
            
            <h1>Hey {name}</h1>
            <p>
                Please Read the Instructions given carefully.<br/>
                Onclicking the exam link provided below, you will be redirected
                 to an exam page, the test will BEGIN at that MOMENT!
            </p>
            {exams.map(exam => (
                <button key={exam.id} href="" onClick={()=>{ navigate(`/exam/${exam.id}`) }}>{exam.name}</button>
            ))}
            
            {/* <button href="" onClick={()=>{
          navigate('/Exam')
        }}>Exam 1 - Mathematics</button>
            <button href="" onClick={()=>{navigate('/Exam');}}>Exam 2 - Phy & Chem</button>
             */}
        </div>
    )
        }
export default AboutUser;

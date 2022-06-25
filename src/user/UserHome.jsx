import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  classes from './userhome.module.css';
import AboutUser from './AboutUser';
import Instructions from '../user/Instructions';
import Status from '../user/Status';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


 const UserHome=() => {
 
  const navigate = useNavigate();

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
    fetchActiveExams();
  }, []) 

  const handleTakemetoexam = (e) => {
    e.preventDefault();
    const open_examindex = exams.findIndex(exam => (exam.is_open));
    if (open_examindex === -1) {
      alert("No currently open exams !!");
    } else {
      const exam = exams[open_examindex];
      navigate(`/exam/${exam.id}`);
    }
  }



  return (
    <div className={classes.mainuserhome}>
        <img src={require('../img/locuscetlogo.png')} className={classes.logoimg}></img>
      <div className={`${classes.userhome} container`}>
      <div className="row usercontent md-12">
        <div className="userdetails col-md-4">
          { exams && <AboutUser exams={exams}/> }
        </div>
        <div className="examdetails col-md-8">
          
          <Instructions/>
          {/* <Status/> */}
        </div>
        { exams && <button className={`${classes.takemeto} btn`} onClick={handleTakemetoexam}>Take me to exam!!!</button>}
      </div>
      
    </div>
    </div>
    
  )
 }
 export default UserHome;

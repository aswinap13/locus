import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from  './userhome.module.css';
import { useNavigate } from 'react-router-dom';

 const AboutUser=() => {


 
    const navigate = useNavigate();
  
  return ( 
        <div className={classes.aboutuser}>
            
            <h1>Hey Aswin</h1>
            <p>
                Please Read the Instructions given carefully.<br/>
                Onclicking the exam link provided below, you will be redirected
                 to an exam page, the test will BEGIN at that MOMENT!
            </p>
            <button href="" onClick={()=>{
          navigate('/Exam')
        }}>Exam 1 - Mathematics</button>
            <button href="" onClick={()=>{navigate('/Exam');}}>Exam 2 - Phy & Chem</button>
        </div>
    )
        }
export default AboutUser;

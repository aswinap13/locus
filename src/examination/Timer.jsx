import React,{useState,useEffect,useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './examination.module.css'
import { useNavigate } from "react-router-dom";

const Timer= ({ submitref }) => {

    const navigate = useNavigate();
    const intervalRef=useRef(null);
    const [timer,setTimer]=useState('00:00:00');


    // Timer Remaining time
    const getTimeRemaining = (endtime) => {
        const total=Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total/1000)%60);
        const minutes = Math.floor((total/1000/60)%60);
        const hours = Math.floor((total/1000/60/60)%24);
        const days = Math.floor(total/(1000*60*60*24));
        
        return{
            total,days,hours,minutes,seconds
        };
    }

    // Timer setTime+ Exit + Clear time
    const startTimer = (deadline) => {
        let {total,days,hours,minutes,seconds}=getTimeRemaining(deadline)
        if(total >=0){
            setTimer(
                (hours > 9 ? hours : '0'+hours)+ ':' +
                (minutes > 9 ? minutes : '0'+minutes)+ ':' +
                (seconds > 9 ? seconds : '0'+seconds)
            )
        } else {
            submitref.current.click();
            alert('Time\'s Up!');
            clearInterval(intervalRef.current);
        }
    }


    // Timer Logic
    const clearTimer = (endtime) => {
        setTimer('03:00:00');
        if(intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000);
        intervalRef.current = id;
    }

    // Setting Up DeadLine Timer
    const getDeadline = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+0);
        deadline.setMinutes(deadline.getMinutes()+0);
        deadline.setHours(deadline.getHours()+3);
        return deadline;
    }

    useEffect(()=>{
        clearTimer(getDeadline());
        return ()=>{if(intervalRef.current) clearInterval(intervalRef.current)}
    },[])

    return(
        <div className={classes.timermain}>
            {timer}
        </div>
    );
}

export default Timer;



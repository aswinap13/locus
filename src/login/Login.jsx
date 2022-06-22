import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './login.module.css';
import { useNavigate } from 'react-router-dom';



 const Login=(props) => {
  
  const setactiveloger=props.setactivelog;
  const activeloger=props.activelog;

  const navigate = useNavigate();
  return (
    <div className={classes.cont}>
          <>
            <form className={classes.login}>          
              <button type='button' className={classes.closer} onClick={() => setactiveloger(!activeloger)}>
                <span aria-hidden="true">&times;</span>
              </button>
                <label htmlFor="userID">User ID</label>
                <input type="text" ></input>
                <label htmlFor="userID">password</label>
                <input type="password"></input>
                <button type='submit' onClick={()=>{
                    navigate('/Home');
                }}>Submit</button>          
            </form>
          </>
    </div>
  )
}

export default Login;





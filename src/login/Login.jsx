import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './login.module.css';
import UserHome from '../user/UserHome';


 const Login=(props) => {
  
  const setactiveloger=props.setactivelog;
  const activeloger=props.activelog;

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className={classes.cont}>
        {!isSubmitted ? (
          <>
            <form className={classes.login}>          
              <button type='button' className={classes.closer} onClick={() => setactiveloger(!activeloger)}>
                <span aria-hidden="true">&times;</span>
              </button>
                <label htmlFor="userID">User ID</label>
                <input type="text" ></input>
                <label htmlFor="userID">password</label>
                <input type="password"></input>
                <button type='submit' onClick={submitForm}>Submit</button>          
            </form>
          </>
        ) : (
          <UserHome />
        )}
    </div>
  )
}

export default Login;





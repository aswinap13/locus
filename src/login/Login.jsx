import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './login.module.css'
import { LoginSuccess } from './LoginSuccess';
import { useEffect } from 'react';
//import { useHistory } from "react-router-dom";

export const Login = (props) => {

    const setactiveloger=props.setactivelog;
    const activeloger=props.activelog;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLogged, setIsLogged] = useState(false); // maybe move to homepage / navbar and give as prop?
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    const [token, setToken] = useState(null);

    useEffect(() => {
      localStorage.setItem('locus-token', token); // when start, check local storage if locus-token, then auto login
    }, [token])
    //const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {username, password};

      const options = { 
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      fetch("http://locusback.herokuapp.com/users/login/", options)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return response.text().then(text => {throw new Error(text)})
        }
      }).then(data => {
        console.log(data)
        setIsError(false)
        setError(null)
        setIsLogged(true)
        setToken(data.token)
        
        //history.push("/")
        //console.log(data)
      }).catch(error => {
        var err = JSON.parse(error.message)
        setIsError(true)
        if (err.Message) { // when user account not approved yet, code: 401
          setError(err.Message)
          //console.log(err.Message)
        } else if (err.non_field_errors !== null) { // when invalid credentials, code: 400
          setError(err.Message)
          //console.log("Invalid username or password")
        } else { // when something else
          setError(err.Message)
          //console.log("Something occured..please try again later..")
        }
      })


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
                <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                <label htmlFor="userID">password</label>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <button type='submit' onClick={handleSubmit}>Submit</button>          
            </form>
          </>
        ) : (
          <loginSuccess />
        )}
        
    </div>
  )
}



export default Login;
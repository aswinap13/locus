import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './login.module.css'
import { useEffect } from 'react';
import UserHome from '../user/UserHome';

export const Login = (props) => {

    const setactiveloger=props.setactivelog;
    const activeloger=props.activelog;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
      localStorage.setItem('locus-token', token); // when start, check local storage if locus-token, then auto login
    }, [token])

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
        setError(null)
        setToken(data.token)
        setIsSubmitted(true);

      }).catch(err => {
        var err = JSON.parse(err.message)
        if (err.Message) { // when user account not approved yet, code: 401
          setError(err.Message)
        } else if (err.non_field_errors !== null) { // when invalid credentials, code: 400
          setError("Invalid username or password")
        } else { // when something else
          setError("Something occured..please try again later..")
        }
        setIsSubmitted(false);
      })
    }
  return (
    <div>
        {!isSubmitted ? (
          <>
            <form className={classes.login}>          
              <button type='button' className={classes.closer} onClick={() => setactiveloger(!activeloger)}>
                <span aria-hidden="true">&times;</span>
              </button>
                { error && <p className={classes.error}>{ error }</p>}
                <label htmlFor="userID">User ID</label>
                <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                <label htmlFor="userID">password</label>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <button type='submit' onClick={handleSubmit}>Submit</button>          
            </form>
          </>
        ) : (
          <UserHome />
        )}
    </div>
  )
}



export default Login;

import React,{useState, useEffect} from 'react';
import NavbarHeader from './homepage/NavbarHeader';
import RegBody from './homepage/RegBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import CircleLoader from "react-spinners/CircleLoader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserHome from './user/UserHome';
import Login from '../src/login/Login'
import ExamControl from './examination/ExamControl';


function App() {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1000)
    },[])

  return (
    <div className={styles.App}>
    {
        loading ? 
          <div  className={styles.loader}>
            <CircleLoader
          loading={loading} 
          color={'#7B36D7'}
          size={80} />
          </div>
        
        :
          <Router>
           
            <Routes>
                <Route exact path="/" element={ 
                <>
                  <header>
                    {<NavbarHeader/>}
                  </header>
                  <RegBody/>
                </>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Home" element={<UserHome/>}/>
                <Route exact path="/exam/:id" element={<ExamControl/>}/>
            </Routes>
          </Router>
    }
     
    </div>
  )
}

export default App
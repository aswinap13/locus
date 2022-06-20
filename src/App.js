import React,{useState, useEffect} from 'react';
import NavbarHeader from './homepage/NavbarHeader';
import RegBody from './homepage/RegBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import CircleLoader from "react-spinners/CircleLoader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserHome from './user/UserHome';


function App() {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },5000)
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
            <header>
            {<NavbarHeader/>}
            </header>
            <Routes>
                <Route exact path="/" element={<RegBody/>}/>
                <Route exact path="/Home" element={<UserHome/>}/>
            </Routes>
          </Router>
    }
     
    </div>
  )
}

export default App
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './QueryForm.module.css';
import Form from './Form';


function QueryForm() {
  return (
    <div className='container'>
        <div className={`${classes.contact} row `}>

           

            <div className={`col-md-4 ${classes.connect} mt-5`}>
                <h2>Contact Us</h2>
                <div className={` ${classes.calling}`}>
                    <div className={classes.callus}>
                        <i class="fa-solid fa-phone fa-2x"></i>
                        <p>Call Us <br/>
                            <a href='tel:+917994325113'>+917994325113</a>
                        </p>
                    </div>
                    <div className={classes.mailus}>
                        <i class="fa-solid fa-envelope fa-2x"></i>
                        <p>Mail Us <br/>
                        <a href='mailto:locuscet@gmail.com'>locuscet@gmail.com</a>   
                        </p>
                                             
                    </div>
                </div>
                <div className={`${classes.footer}`}>
                        <a href='#' className={classes.ig}>
                        <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href='#' className={classes.fbb}>
                        <i class="fa-brands fa-facebook fa-2x"></i>
                        </a>
                    </div>
            </div>
        </div>
    </div>
    
  )
}

export default QueryForm
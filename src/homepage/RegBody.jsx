import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './RegBody.module.css';
import QueryForm from './QueryForm';

function RegBody() {
  return (
    <>
      <div className={classes.homepage}>
          <div className={classes.hpcontent}>
            <h1>LOCUS 3.0 - 
              An initiative by students of CET
            </h1>
            <p>Practice makes progression.<br/>
            Progress moulds success. <br/>
            Enhance your KEAM preparations with LOCUS.
            </p>
            <button className='btn' >Take Test {'\u00A0'} ➤ </button>
          </div>
          <div className={classes.hpimg}>
            <img src={require('../img/5834.jpg')}>
            </img>
          </div>
      </div>

      <div className={classes.whoarewe} id="whoarewe">
        <div className={classes.whead}>
            <h1>Who  Are  We?
            </h1>
        </div>
        <div className={classes.wcontent}>
            <p>
            LOCUS is a KEAM mock test initiative prepared exclusively by the students of College of Engineering Trivandrum. With the 2 
            previous years of LOCUS proved helpful to engineering aspirants, we are 
            here with third edition of LOCUS to sharpen your KEAM skills.
            <br/>
            <br/>
            An initiative by KSU UNION, College Of Engineering Trivandrum
            </p>
        </div>
      </div>

      <div className="footer" id="contact">
        <QueryForm></QueryForm>
      </div>
      <footer className='text-center mt-2 '>
      ©copyright 2022
      </footer>
      
    </>
  )
}

export default RegBody
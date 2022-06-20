import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Form.module.css';

export default function Form() {
  return (
    <div>
        <div className={classes.form}>
            <form action="">    
                <div className='name row col-md-10'>
                    <div class="form-group col-md-6">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control mt-2 " id="fname" placeholder="First Name"></input>
                    </div> 
                    <div class="form-group col-md-6">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control mt-2" id="lname" placeholder="Last Name"></input>
                    </div>
                </div>       
                <div class="form-group col-md-10 mt-4">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control mt-2" id="email" placeholder="mail@example.com"></input>
                </div>
                
                <div class="form-group mt-5 col-md-10" >
                    <textarea type="text" cols="40" rows="5" class="form-control" id="tellus" placeholder="TELL US"></textarea>
                </div>
                <button className='btn btn-light mt-4' type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

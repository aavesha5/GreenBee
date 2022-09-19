import React, { useState } from 'react'
import "./Register.css";
import validation from './validation';
import { NavLink } from 'react-router-dom';




const Register = () => {

    
    const[values, setValues]=useState({
     fullname:"",
     email:"",
     mobile:"",
     user:"",
     password:"",
     cpassword:"",
    });

    const [errors,setErrors]=useState({});

    const handleChange =(event)=>{
   setValues({
...values,
[event.target.name]: event.target.value,

   })

    }

const handleFormSubmit =(event) =>{
    event.preventDefault();
    setErrors(validation(values));

   
};


    return (
    <>
       <section className='wrapper'>
    <div className='container'>
<div className='col-sm-8  offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
<form className='rounded bg-white shadow p-5'>
<h2 className='text-dark fw-bolder fs-4 mb-2'>Register</h2>
<div className="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="fullname" name='fullname' value={values.fullname} onChange={handleChange}/>
  <label for="floatingInput">Full Name</label>
  {errors.fullname && <p className='error'>{errors.fullname}</p>}
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={values.email} onChange={handleChange}/>
  <label for="floatingInput">Email address</label>
  {errors.email && <p className='error'>{errors.email}</p>}
</div>

<div className="form-floating mb-3">

  <input type="text" className="form-control" id="floatingInput" placeholder="1234567890" name='mobile' value={values.mobile} onChange={handleChange}/>
  <label for="floatingInput">Contact Number</label>
  {errors.mobile && <p className='error'>{errors.mobile}</p>}
</div>

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="rochel" name='user' value={values.user} onChange={handleChange}/>
  <label for="floatingInput">Username</label>
  {errors.user && <p className='error'>{errors.user}</p>}
</div>

<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={values.password} onChange={handleChange}/>
  <label for="floatingPassword">Password</label>
  {errors.password && <p className='error'>{errors.password}</p>}
</div>

<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" name='cpassword' value={values.cpassword} onChange={handleChange}/>
  <label for="floatingPassword">Confirm Password</label>
  {errors.cpassword && <p className='error'>{errors.cpassword}</p>}
</div>

<button type='submit' className='btn btn-primary submit_btn w-100 my-4'  onClick={handleFormSubmit}>Register</button>
<div className='text-center text-muted text-uppercase mb-3'>or</div>
<NavLink to='/login' className='btn btn-light login_with w-100 mb-3'>
Do you have an Account?</NavLink>
</form>


</div>
    </div>

</section>
       </>
  )
}

export default Register




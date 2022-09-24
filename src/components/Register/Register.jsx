import React, { useState,useEffect } from 'react'
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

   
   const [isSubmit,setIsSubmit]=useState(false);

    const handleChange =(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      console.log(name, value);
   setValues({
...values,
[event.target.name]: event.target.value,

   })

    }

const handleFormSubmit =(event) =>{
    event.preventDefault();
    setErrors(validation(values));
    setIsSubmit(true);
  

};

useEffect(()=>{
  console.log(errors);
  if(Object.keys(errors).length === 0 && isSubmit){console.log(values)}
},[errors])


    return (
    <>
       <section className='wrapper'>
    <div className='container'>
<div className='col-sm-8  offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
<form className='rounded bg-white shadow p-5'>
<h2 className='text-dark fw-bolder fs-4 mb-2'>Register</h2>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="name" placeholder="fullname" autoComplete="off" name='fullname' value={values.fullname} onChange={handleChange}/>
  <label htmlFor="name">Full Name</label>
  {errors.fullname && <p className='error'>{errors.fullname}</p>}
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="off" name='email' value={values.email} onChange={handleChange}/>
  <label htmlFor="email">Email address</label>
  {errors.email && <p className='error'>{errors.email}</p>}
</div>

<div className="form-floating mb-3">

  <input type="text" className="form-control" id="mobile" placeholder="1234567890" autoComplete="off" name='mobile' value={values.mobile} onChange={handleChange}/>
  <label htmlFor="mobile">Contact Number</label>
  {errors.mobile && <p className='error'>{errors.mobile}</p>}
</div>

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="username" placeholder="rochel" autoComplete="off" name='user' value={values.user} onChange={handleChange}/>
  <label htmlFor="username">Username</label>
  <small>Hint:username only contains alphanumeric values '.'&'_' are allowed in between only.</small>
  {errors.user && <p className='error'>{errors.user}</p>}
</div>

<div className="form-floating mb-3">
  <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" name='password' value={values.password} onChange={handleChange}/>
  <label htmlFor="password">Password</label>
  <small>Hint:password must contain one uppercase,one lowercase letter,one digit and one symbol.</small>
  {errors.password && <p className='error'>{errors.password}</p>}
</div>

<div className="form-floating">
  <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" autoComplete="off" name='cpassword' value={values.cpassword} onChange={handleChange}/>
  <label htmlFor="cpassword">Confirm Password</label>
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




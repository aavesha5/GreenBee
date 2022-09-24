import React, {useState, useEffect} from 'react'
import Logo from '../Images/logo.jpg'

import './Login.css'


const Login = () => {

  const[values, setValues]=useState({
    email:"",
    password:"",
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
   setErrors(validate(values));
   setIsSubmit(true);
  
};

useEffect(()=>{
  console.log(errors);
  if(Object.keys(errors).length === 0 && isSubmit){console.log(values)}
},[errors])


const validate =(values)=> {
const errors={};

if(!values.email){
  errors.email="Email is required"
} else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
errors.email="Email is invalid"
}

if(!values.password){
  errors.password="Password is required"
} else if (!/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,20}$/.test(values.password)){
errors.password="Password is not valid."
}

return errors;
};



  return (
    <>
<section className='wrapper'>
    <div className='container'>
<div className='col-sm-8  offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
<form className='rounded bg-white shadow p-5'>
<h2 className='text-dark fw-bolder fs-4 mb-2'>Sign in to  <img src={Logo} alt="Logo" />GreenBee</h2>
<div className='fw-normal text-muted mb-4'>
    New Here? <a href='#' className='text-primary fw-bold text-decoration-none'>Create an Account</a>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={values.email} onChange={handleChange}/>
  <label htmlFor="floatingInput">Email address</label>
  {errors.email && <p className='error'>{errors.email}</p>}
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={values.password} onChange={handleChange}/>
  <label htmlFor="floatingPassword">Password</label>
  {errors.password && <p className='error'>{errors.password}</p>}
</div>
<div className='mt-2 text-end'>
<a href='#' className='text-primary fw-bold text-decoration-none'>Forget Password?</a>

</div>
<button type='submit' className='btn btn-primary submit_btn w-100 my-4' onClick={handleFormSubmit}>Login</button>

</form>


</div>
    </div>

</section>
    
    
    
    </>
  )
}

export default Login
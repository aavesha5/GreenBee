import React from 'react'
import Logo from './Images/logo.jpg'
import google from './Images/google-icon.svg'
import fb from './Images/facebook-icon.svg'
import lk from './Images/linkedin-icon.svg'
import './Login.css'
const Login = () => {
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
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className='mt-2 text-end'>
<a href='#' className='text-primary fw-bold text-decoration-none'>Forget Password?</a>

</div>
<button type='submit' className='btn btn-primary submit_btn w-100 my-4'>Login</button>
<div className='text-center text-muted text-uppercase mb-3'>or</div>
<a href='#' className='btn btn-light login_with w-100 mb-3'>
<img src={google} className='img-fluid me-3' alt="google" />Continue with Google</a>

<a href='#' className='btn btn-light login_with w-100 mb-3'>
<img src={fb} className='img-fluid me-3' alt="fb" />Continue with Facebook</a>

<a href='#' className='btn btn-light login_with w-100 mb-3'>
<img src={lk} className='img-fluid me-3' alt="linkedin" />Continue with LinkedIn</a>
</form>


</div>
    </div>

</section>
    
    
    
    </>
  )
}

export default Login
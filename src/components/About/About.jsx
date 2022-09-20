import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
    <div className='about'> 
        <br />
        <h1 className='head'> <b>  About Us  </b>  </h1> 
        <br /><br />
        <h3 className='sub'> Vision </h3> 
        <p className='p'>
        <i> <b> Building India’s largest Price Discovery and procurement platform.  </b> </i>
        </p><br />
        <h3 className='sub'>  Mission  </h3>
        <p className='p'> 
            <i> <b> 
            To help people to have easy access and to involve men and youth 
            to share the load by contributing in purchase of fruits and vegetables.
            To help women save their time and concentrate on more productive things.
            The concept of using technology to bridge the digital world with the physical world 
            with the purpose of providing a unique interactive experiences for the user. 
            </b> </i>
        </p>
    </div>
  )
}

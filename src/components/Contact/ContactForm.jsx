import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ContactForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ContactForm() {
  return (
    <Container>
        <Row className='mb-4 mt-3'>
            <Col>
                <h1 className='display-4 mb-4'>
                <b>Contact GreenBee</b>
                </h1>
                <h3 className='color_sec py-4'>
                We are here to assit you in your daily fruits and vegetables needs!
                </h3>
            </Col>
        </Row>
        <Row className='sec_sp'>
            <Col lg='5' className='mb-5'>
                
                <address>
                <h2> General Enquiry </h2>  
                <br /><p>
                    <strong>
                        Email : abc@gmail.com
                    </strong></p>
                    <p>
                        <strong>
                            Phone : +91 9876543210
                        </strong>
                    </p>
                    <p>
                        <strong>
                           Timings : Mon to Sun 9am-6pm
                        </strong>
                    </p>
                </address>
                
            </Col>
            <Col lg='7' className='d-flex align-items-center'>
                <form className='contact_form w-100'>
                    <Row>
                    <h2>Drop Us a Message</h2>
                        <Col lg='6' className='form-group'>
                            <input className='form-control'
                            id="name"
                            name='name'
                            placeholder='Name'
                            type="text"  />
                        </Col>
                        <Col lg='6' className='form-group'>
                            <input className='form-control'
                            id="email"
                            name='email'
                            placeholder='Email'
                            type="email"  />
                        </Col> 
                    </Row> <br />
                    <textarea className='form-control rounded-0'
                    id='message'
                    name='message'
                    placeholder='Message'
                    rows={4} >
                    </textarea>
                    <br />
                    <Row>
                        <Col lg='12' className='form-group'>
                        <button type="submit">Submit</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
  );
}

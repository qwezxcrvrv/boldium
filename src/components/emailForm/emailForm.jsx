import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, FormControl, FormGroup, Row, Spinner  } from 'react-bootstrap';
import './emailForm.scss';
import ConfirmModal from './confirmModal';

function loadingCircle(){
    return (
        <div class="wrapper">
            <div class="loader">
                <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path class="loading-animation__path" d="M17.9 91.1V8.9h33.5s28.8-1.4 28.8 24.7c0 19.6-17.5 23.2-17.5 23.2L85 91.2H69.8l-21-33h-8.1V47.1h9.6s16.1 1.6 16.1-13.5-16.1-13.4-16.1-13.4H31.1v70.9H17.9z"/>
                </svg>
            </div>
        </div>
    );
}

function EmailForm() {
    const [modalShow, setModalShow] = useState(false);
    const [spinnerShow, setSpinnerShow] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSpinnerShow(true)
        document.getElementById("emailSubmitButton").setAttribute('disabled', '');

        emailjs.sendForm('service_8p5cvbo', 'template_lf6iplm', form.current, '3ByhoO5Zn5_GC5llA')
        .then((result) => {
            console.log(result.text);
            document.getElementById("emailForm").reset();
            setSpinnerShow(false)
            document.getElementById("emailSubmitButton").removeAttribute('disabled');
            setModalShow(true)            
        }, (error) => {
            setSpinnerShow(false)
            document.getElementById("emailSubmitButton").removeAttribute('disabled');
            alert("Error occurred.")
            console.log(error.text);
        });
    };

    return (
        <div>        
            <Container className="emailForm pt_lg pb_lg">
                <p className="header">Get In Touch</p>
                <p className="paragraph">In most cases, we can provide a quote remotely without a site visit if you have council property files. Contact us for a free consultation.
                    <br /><br />
                    E: info@boldium.co.nz<br />
                    M: 0274241010
                    <br /><br />
                </p>
                <Form id="emailForm" className="emailForm_form" ref={form} onSubmit={sendEmail}>
                    <Row className="justify-content-md-center">
                        <Col>
                            <FormGroup className="mb-3" controlId="formFirstName">
                                <FormControl name="first_name" placeholder='First name' type="text" required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className="mb-3" controlId="formLastName">
                                <FormControl name="last_name" placeholder='Last name' type="text" required />
                            </FormGroup>
                        </Col>                    
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <FormGroup className="mb-3" controlId="formFirstName">
                                <FormControl name="email_from" placeholder='Email' type="email" required />
                            </FormGroup>
                        </Col>                  
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <FormGroup className="mb-3" controlId="formFirstName">
                                <FormControl name="message" placeholder='Message' as="textarea" rows="5" required />
                            </FormGroup>
                        </Col>                  
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button id="emailSubmitButton" className="submitBtn" type="submit">
                            {spinnerShow ? 
                                <Spinner
                                    id="loadingSpinner"
                                    as="span"
                                    animation="border"                            
                                    role="status"
                                    aria-hidden="true"
                                    display="none"
                                /> :
                                <span>Submit</span> 
                            }
                        </Button>                
                    </Row>
                </Form>
            </Container>
            <ConfirmModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            ></ConfirmModal>
        </div>
    );
  }
  
export default EmailForm;
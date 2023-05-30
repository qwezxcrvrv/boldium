import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, FormControl, FormGroup, Row, Modal  } from 'react-bootstrap';
import './emailForm.scss';
import ConfirmModal from './confirmModal';

function EmailForm() {
    const [modalShow, setModalShow] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setModalShow(true)  
        

        // emailjs.sendForm('service_8p5cvbo', 'template_lf6iplm', form.current, '3ByhoO5Zn5_GC5llA')
        // .then((result) => {
        //     console.log(result.text);
        //     document.getElementById("emailForm").reset();
        //     setModalShow(true)            
        // }, (error) => {
        //     alert("Error occurred.")
        //     console.log(error.text);
        // });
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
                        <Button className="submitBtn" type="submit">Submit</Button>                
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
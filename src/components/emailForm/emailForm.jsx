import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import './emailForm.scss';

function EmailForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8p5cvbo', 'template_lf6iplm', form.current, '3ByhoO5Zn5_GC5llA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (        
        <Container className="emailForm">
            <p className="header">Get In Touch</p>
            <Form className="emailForm_form" ref={form} onSubmit={sendEmail}>
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
    );
  }
  
export default EmailForm;
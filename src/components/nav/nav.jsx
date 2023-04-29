import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './nav.scss';

function NavigationBar() {
    const [solid, setSolid] = useState('');

    const listenScrollEvent = e => {
        if (window.scrollY > 60) {
            setSolid('solid');
        } else {
            setSolid('');
        }
    }

    useEffect(() => {
        if (window.scrollY > 60) {
            setSolid('solid');
        } else {
            setSolid('');
        }
        window.addEventListener('scroll', listenScrollEvent)        
    });

    return (
        <Navbar expand="lg" fixed='top' className={solid}>
            <Container>
                <Navbar.Brand href="/home"><img className='nav_brand_image' alt="boldium logo"/></Navbar.Brand>
                {/*
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>                     
                </Nav>
                </Navbar.Collapse>
                */}
            </Container>
        </Navbar>
    );
  }
  
  export default NavigationBar;
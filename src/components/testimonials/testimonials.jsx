import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './testimonials.scss';

function Testimonials() {

    return (        
        <div id="testimonials">
            <div>
                <h1>Testimonials</h1>
                <Carousel interval={10000}>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Testimonial 1</h2>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Testimonial 2</h2>
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Testimonial 3</h2>
                            <h3>Third slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
  
export default Testimonials;
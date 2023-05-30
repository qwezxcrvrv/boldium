import React from "react";
import './testimonials.scss';

function Testimonials() {

    return (        
        <div id="testimonials" className="main_css_container">
            <div className="header text-body-700 md:pt-16 pt-4 pb-32 md:pb-8">
                Testimonials
            </div>
            <div className="grid-default" >
                <div className="TestimonialGrid flex flex-col md:grid space-y-10 gap-0 md:gap-4 col-start-2 col-span-10 py-20 md:py-40" >
                    {/* <div style={{gridColumnStart:1, gridRowStart:1}} >                        
                        <div data-scroll-class="flipIn" className="Testimonial flipOut" data-v-51afca16  >
                            <div className="Testimonial__top flex" data-v-51afca16>
                                <div className="Testimonial__iconLine ml-4 w-full" data-v-51afca16></div>
                            </div>
                            <figure data-v-51afca16>
                                <blockquote className="Testimonial__quote text-titling-100 md:text-titling-200 pt-8 pb-2" data-v-51afca16>
                                    <p data-v-51afca16>
                                        Boldium Architecture we collaborated with was outstanding. Their expertise, attention to detail, and professionalism greatly contributed to the success of our projects.
                                    </p>
                                </blockquote>
                                <figcaption className="Testimonial__attribution" data-v-51afca16>
                                    <span className="Testimonial__name text-body-500" data-v-51afca16>
                                        James Cosslett
                                    </span> <span className="Testimonial__company text-body-400" data-v-51afca16>
                                        - Director, Function and Form
                                    </span>
                                    
                                </figcaption>
                            </figure>
                        </div>
                    </div> */}
                    <div style={{gridColumnStart:1, gridRowStart:1}} >
                        <div data-scroll-class="flipIn" className="Testimonial flipOut"  data-v-51afca16 >
                            <div className="Testimonial__top flex" data-v-51afca16>   
                                <div className="Testimonial__icon" data-v-51afca16=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" data-v-51afca16="" transform="scale(-1 -1)"><g fill="none" fillRule="evenodd" data-v-51afca16=""><path fillRule="nonzero" stroke="#ABABAB" d="M17.47.5v13.458c0 5.012-1.018 8.975-3.088 11.877-2.02 2.831-5.439 5.33-10.235 7.516h0l-3.461-6.54c3.03-1.469 5.121-2.94 6.292-4.393 1.366-1.694 2.081-3.721 2.138-6.085h0H.5V.5h16.97zM38.5.5v13.458c0 5.012-1.018 8.975-3.088 11.877-2.02 2.831-5.439 5.33-10.235 7.516h0l-3.461-6.54c3.03-1.469 5.12-2.94 6.292-4.393 1.366-1.694 2.08-3.721 2.138-6.085h0-8.616V.5H38.5z" transform="rotate(0 19.5 17)" data-v-51afca16=""></path></g></svg></div>                         
                                <div className="Testimonial__iconLine ml-4 w-full"data-v-51afca16 ></div>
                            </div>
                            <figure data-v-51afca16>
                                <blockquote className="Testimonial__quote text-titling-100 md:text-titling-200 pt-8 pb-2"
                                data-v-51afca16>
                                    <p data-v-51afca16>Our experience with Boldium Architecture was truly remarkable. They took our vision and turned it into a reality beyond our expectations. Their expertise, innovative ideas, and attention to detail brought out the best in our home design. We are grateful for their professionalism and the beautiful space they created for us.</p>
                                </blockquote>
                                <figcaption className="Testimonial__attribution" data-v-51afca16>
                                    <span className="Testimonial__name text-body-500" data-v-51afca16>Jenny Cooper</span> <span
                                        className="Testimonial__company text-body-400" data-v-51afca16>- Home owner, Glenfield</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div style={{gridColumnStart:2, gridRowStart:2}}  >
                        <div data-scroll-class="flipIn" className="Testimonial flipOut" data-v-51afca16 >
                            <div className="Testimonial__top flex" data-v-51afca16>                                
                                <div className="Testimonial__iconLine ml-4 w-full" data-v-51afca16></div>
                                <div className="Testimonial__icon" data-v-51afca16=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" data-v-51afca16="" transform="scale(1 1)"><g fill="none" fillRule="evenodd" data-v-51afca16=""><path fillRule="nonzero" stroke="#ABABAB" d="M17.47.5v13.458c0 5.012-1.018 8.975-3.088 11.877-2.02 2.831-5.439 5.33-10.235 7.516h0l-3.461-6.54c3.03-1.469 5.121-2.94 6.292-4.393 1.366-1.694 2.081-3.721 2.138-6.085h0H.5V.5h16.97zM38.5.5v13.458c0 5.012-1.018 8.975-3.088 11.877-2.02 2.831-5.439 5.33-10.235 7.516h0l-3.461-6.54c3.03-1.469 5.12-2.94 6.292-4.393 1.366-1.694 2.08-3.721 2.138-6.085h0-8.616V.5H38.5z" transform="rotate(0 19.5 17)" data-v-51afca16=""></path></g></svg></div>
                            </div>
                            <figure data-v-51afca16>
                                <blockquote className="Testimonial__quote text-titling-100 md:text-titling-200 pt-8 pb-2"
                                data-v-51afca16>
                                    <p data-v-51afca16>
                                        Boldium Architecture has a deep understanding of the necessary procedures and knows exactly what needs to be done. Their knowledge and experience in navigating the council approval process made it seamless and stress-free.
                                    </p>
                                </blockquote>
                                <figcaption className="Testimonial__attribution" data-v-51afca16>
                                    <span
                                        className="Testimonial__name text-body-500" data-v-51afca16>David taylor</span> <span
                                            className="Testimonial__company text-body-400" data-v-51afca16>- Home owner, Hill Park</span></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Testimonials;
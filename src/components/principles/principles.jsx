import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './principles.scss';

function Principles() {

    return (
    <div className="main_css_container">
        <div id="homepage">
            <section data-v-b02e1d2e="" className="Homepage__work">
                <div data-v-4b5c3e62="" data-v-b02e1d2e="" className="SelectedWork relative w-screen">
                    <div data-v-4b5c3e62="" aria-hidden="true" className="SelectedWork__bgShim SelectedWork__bgShim--color"></div>
                    <div data-v-4b5c3e62="" className="SelectedWork__ProjectList w-screen">
                        <div data-v-4b5c3e62="" className="flex md:grid-default px-4 md:px-0">
                            <div data-v-4b5c3e62="" className="SelectedProjects row-start-1 col-start-2 col-end-12 pt-20 md:pt-4 pb-16">
                                <h2 data-v-b02e1d2e="" data-v-4b5c3e62="" className="text-body-700 pb-8">
                                    Our Values
                                </h2>
                                <ul data-v-4b5c3e62="" className="ProjectList">
                                    <li className="ProjectList__item flex flex-col py-10">
                                        <div data-v-77bfc8aa="" className="ProjectCard cursor-pointer grid-default w-full">
                                            <div data-v-77bfc8aa="" className="ProjectCard__left col-start-1 row-start-1 col-end-12 md:col-end-6 flex flex-col justify-center">                                                
                                                <div data-v-6505c503="" data-v-77bfc8aa="" className="Heading__outer overflow-y-hidden ProjectCard__title mt-2 my-1 md:mb-0 text-titling-50 xs:text-titling-100 md:text-titling-200 uppercase">
                                                    <h3 data-v-6505c503="" className="Heading z-10  ">
                                                        <a data-v-b02e1d2e="" href="/case-studies/fusion360" className="whitespace-pre-line" data-v-6505c503="">
                                                            Quality Design
                                                        </a>
                                                    </h3>
                                                </div>
                                                <p data-v-77bfc8aa="" className="ProjectCard__eyebrow text-body-500 square-bullet">
                                                    Smart design + Function
                                                </p>
                                        </div>
                                        <div data-v-77bfc8aa="" className="ProjectCard__right flex flex-col row-start-3 md:row-start-1 col-start-1 md:col-start-7 col-span-12 md:col-span-5">
                                            <div data-v-4b5c3e62="" data-v-77bfc8aa="" className="h-full flex items-center">
                                                <p data-v-b02e1d2e="" data-v-77bfc8aa="" className="mt-0 md:mt-8 text-body-400 whitespace-pre-line">
                                                    A space that not only looks visually appealing, but also meets the needs of its users in an efficient and effective manner.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ProjectList__item flex flex-col py-10">
                                        <div data-v-77bfc8aa="" className="ProjectCard cursor-pointer grid-default w-full">
                                            <div data-v-77bfc8aa="" className="ProjectCard__left col-start-1 row-start-1 col-end-12 md:col-end-6 flex flex-col justify-center">                                                
                                                <div data-v-6505c503="" data-v-77bfc8aa="" className="Heading__outer overflow-y-hidden ProjectCard__title mt-2 my-1 md:mb-0 text-titling-50 xs:text-titling-100 md:text-titling-200 uppercase">
                                                    <h3 data-v-6505c503="" className="Heading z-10  ">
                                                        <a data-v-b02e1d2e="" href="/case-studies/upwork" className="whitespace-pre-line" data-v-6505c503="">
                                                            Cost-Effective Design
                                                        </a>
                                                    </h3>
                                                </div>
                                                <p data-v-77bfc8aa="" className="ProjectCard__eyebrow text-body-500 square-bullet">
                                                    Buildability + Easy construction solution
                                                </p>
                                            </div>
                                            <div data-v-77bfc8aa="" className="ProjectCard__right flex flex-col row-start-3 md:row-start-1 col-start-1 md:col-start-7 col-span-12 md:col-span-5">
                                                <div data-v-4b5c3e62="" data-v-77bfc8aa="" className="h-full flex items-center">
                                                    <p data-v-b02e1d2e="" data-v-77bfc8aa="" className="mt-0 md:mt-8 text-body-400 whitespace-pre-line">
                                                    Balancing aesthetic appeal and functional requirements while minimizing unnecessary expenses.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ProjectList__item flex flex-col py-10">
                                        <div data-v-77bfc8aa="" className="ProjectCard cursor-pointer grid-default w-full">
                                            <div data-v-77bfc8aa="" className="ProjectCard__left col-start-1 row-start-1 col-end-12 md:col-end-6 flex flex-col justify-center">                                                
                                                <div data-v-6505c503="" data-v-77bfc8aa="" className="Heading__outer overflow-y-hidden ProjectCard__title mt-2 my-1 md:mb-0 text-titling-50 xs:text-titling-100 md:text-titling-200 uppercase">
                                                    <h3 data-v-6505c503="" className="Heading z-10  ">
                                                        <a data-v-b02e1d2e="" href="/case-studies/life-plus" className="whitespace-pre-line" data-v-6505c503="">
                                                            Responsible Consultation
                                                        </a>
                                                    </h3>
                                                </div>
                                                <p data-v-77bfc8aa="" className="ProjectCard__eyebrow text-body-500 square-bullet">
                                                    Honest + Responsible with clients
                                                </p>
                                            </div>
                                            <div data-v-77bfc8aa="" className="ProjectCard__right flex flex-col row-start-3 md:row-start-1 col-start-1 md:col-start-7 col-span-12 md:col-span-5">
                                                <div data-v-4b5c3e62="" data-v-77bfc8aa="" className="h-full flex items-center">
                                                    <p data-v-b02e1d2e="" data-v-77bfc8aa="" className="mt-0 md:mt-8 text-body-400 whitespace-pre-line">
                                                        Honest and transparent with clients throughout the project, taking responsibility for one's actions and decisions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul> 
                                {/* <a data-v-39e39041="" data-v-b02e1d2e="" href="/work" className="ArrowLink flex pt-8 pb-0 md:pt-20 md:pb-20 space-x-4 w-100" data-v-4b5c3e62="">
                                    <span data-v-b02e1d2e="" className="Homepage__ctaText text-titling-100 md:text-titling-200 uppercase pr-0 md:pr-4">
                                        See our work
                                    </span>
                                    <div data-v-39e39041="" className="ArrowLink__arrow flex items-center flex-grow">
                                        <span data-v-39e39041="" className="ArrowLink__line block mr-0 md:mr-4 mr-2"></span>
                                        <svg data-v-39e39041="" width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" className="ArrowLink__icon w-auto">
                                            <path data-v-39e39041="" d="M8.5 17l-1.4-1.4 6.098-6.1H0v-2h13.2L7.1 1.4 8.5 0 17 8.5 8.5 17z" fill="currentColor">
                                            </path>
                                        </svg>
                                    </div>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
}

export default Principles;
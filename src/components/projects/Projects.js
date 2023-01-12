import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

import project2 from '../../assets/imgs/lung-project.jpeg';

import technologies from './technologies.js';

const Projects = () => {

    const [index, setIndex] = useState(0);
    const time = 20000;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="resume-bx wow zoomIn">
                    <h2>Projects</h2>
                    <Carousel slide={false} interval={time} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item className='item-fade'>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="project-title">
                                        <p>Taxi GPS Tracker</p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <div className="text">
                                                        <p align='justify'>
                                                            A real-time tracking app for taxi companies that utilizes ELM-327 sensors to measure the rpms of their vehicles, and GPS location of the phone that was sending to the company. The app also features a web page that allows users to view the history of the car's movements within a specific period and compare up to 3 cars at the same time.
                                                        </p>
                                                        <p><b>Technologies:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="ReactJS" src={technologies.reactjs}></img>
                                                                    <p>ReactJS for front-end development.</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="NodeJS" src={technologies.nodejs}></img>
                                                                    <p>NodeJS and Express for back-end development.</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="MySQL" src={technologies.mysql}></img>
                                                                    <p>MySQL for database management.</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="Kotlin" src={technologies.kotlin}></img>
                                                                    <p>Kotlin for Android app development.</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="AWS" src={technologies.aws}></img>
                                                                    <p>AWS for cloud services.</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <p><b>Characteristics:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>Real-time tracking of taxi vehicles using GPS location of the phone.</li>
                                                            <li>Measurement of car speed.</li>
                                                            <li>Viewing the history of car movements on a web page.</li>
                                                            <li>Comparison of up to 3 cars at the same time.</li>
                                                            <li>Secure login for authorized access to the tracking data.</li>
                                                            <li>Admin panel for managing cars, drivers and clients.</li>
                                                            <li>Cloud-based infrastructure for high availability and scalability.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="center-container">
                                                        <div className="download-cv">
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/TaxiTracker" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Full project</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='item-fade'>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="project-title">
                                        <p>COPD Monitoring Wearable Device</p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <Col lg={8} md={12}>
                                                        <div className="text">
                                                            <p align='justify'>
                                                                A project to facilitate the measurement of respiratory rate in people with Chronic Obstructive Pulmonary Disease (COPD) using a wearable device. The device consists of a mask with an omnidirectional electret microphone that captures audio signals and a transducer that filters the signal to obtain the respiratory rate. The device is connected to a smartphone which records audio samples in .WAV format and stores it on a web server using AWS S3.
                                                            </p>
                                                            <p><b>Technologies:</b></p>
                                                            <ul className="achievements-list">
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img alt="ReactJS" src={technologies.reactjs}></img>
                                                                        <p>ReactJS for front-end development.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img className='white-bg' alt="NodeJS" src={technologies.flask}></img>
                                                                        <p>Flask for back-end development.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img alt="Python" src={technologies.python}></img>
                                                                        <p>Python for signal analysis</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img alt="MySQL" src={technologies.mongodb}></img>
                                                                        <p>MongoDB for database management.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img alt="Kotlin" src={technologies.kotlin}></img>
                                                                        <p>Kotlin for Android app development.</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="tech-icon">
                                                                        <img alt="AWS" src={technologies.aws}></img>
                                                                        <p>AWS S3 for file storage.</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <p><b>Characteristics:</b></p>
                                                            <ul className="achievements-list">
                                                                <li>Wearable device consisting of a mask with an omnidirectional electret microphone.</li>
                                                                <li>Digital filtering stage to obtain respiratory rate.</li>
                                                                <li>Connection to a smartphone using a 3.5mm jack cable.</li>
                                                                <li>Mobile app for recording and storing audio samples in .WAV format.</li>
                                                                <li>Web page for displaying a graphic summary of the audio signal and the user's status.</li>
                                                                <li>Accuracy of at least 80% in measuring respiratory rate.</li>
                                                                <li>Fast and easily accessible solution for accurate measurement of respiratory rate in people with COPD.</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={12}>
                                                        <div className="project-img">
                                                            <img src={project2} alt="Lung-app project." />
                                                        </div>
                                                    </Col>
                                                    <div className="center-container">
                                                        <div className="download-cv">
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/pf-lungapp-backend" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Backend</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/pf-lungapp-frontend" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Frontend</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='item-fade'>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="project-title">
                                        <p>CBZ/CBR to PDF Converter</p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <div className="text">
                                                        <p align='justify'>
                                                            A Python program that allows users to convert comic book files in CBZ or CBR format to a PDF file. It preserves the original formatting of the comic book while providing a convenient and widely supported format for reading on various devices.
                                                        </p>
                                                        <p><b>Technologies:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="Python" src={technologies.python}></img>
                                                                    <p>Python.</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <p><b>Characteristics:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>Support for CBZ and CBR file formats.</li>
                                                            <li>Automatic page detection and ordering.</li>
                                                            <li>Customizable output settings such as page size and orientation.</li>
                                                            <li>Easy to use command-line interface.</li>
                                                            <li>Fast and efficient conversion process.</li>
                                                            <li>Support for batch conversion of multiple files at once.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="center-container">
                                                        <div className="download-cv">
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/Comic2pdf_converter" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Project</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='item-fade'>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="project-title">
                                        <p>Real-time Colombian License Plate Detector</p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <div className="text">
                                                        <p align='justify'>
                                                            A real-time license plate detector for Colombian license plates using a webcam and Python. The system uses computer vision techniques to detect and recognize Colombian license plates in real-time video feed from a webcam. It allows the user to quickly identify the license plate number and vehicle information.
                                                        </p>
                                                        <p><b>Technologies:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="Python" src={technologies.python}></img>
                                                                    <p>Python for computer vision and image processing.</p>
                                                                </div>
                                                            </li>
                                                            <li>OpenCV library for image processing and computer vision.</li>
                                                        </ul>
                                                        <p><b>Characteristics:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>Real-time license plate detection from webcam video feed.</li>
                                                            <li>Recognition of Colombian license plate numbers.</li>
                                                            <li>Option to save and export data.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="center-container">
                                                        <div className="download-cv">
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/plate_detector" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Project</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='item-fade'>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="project-title">
                                        <p>Access Control Backend </p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <div className="text">
                                                        <p align='justify'>
                                                            A backend system for controlling access to spaces using a mobile application. The system allows users to control access to certain spaces and domotic devices using a mobile application. It also includes authentication features to ensure secure access.
                                                        </p>
                                                        <p><b>Technologies:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>
                                                                <div className="tech-icon">
                                                                    <img alt="NodeJS" src={technologies.nodejs}></img>
                                                                    <p>NodeJS for bac-kend development.</p>
                                                                </div>
                                                            </li>
                                                            <li>Authentication and authorization using JSON Web Tokens (JWT).</li>
                                                        </ul>
                                                        <p><b>Characteristics:</b></p>
                                                        <ul className="achievements-list">
                                                            <li>User authentication and authorization.</li>
                                                            <li>Option to set access permissions and schedules.</li>
                                                            <li>Admin panel for managing users, devices and spaces.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="center-container">
                                                        <div className="download-cv">
                                                            <div className="link-button">
                                                                <a href="https://github.com/esacon/pf-domotica-arduino" rel="noreferrer" target="_blank">
                                                                    <button>
                                                                        <div className="center-container">
                                                                            <Github size='25px' color="#f1f1f1" />
                                                                            <span>Project</span>
                                                                        </div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="center-container">
                        <h5>More on the way...</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
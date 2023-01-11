import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Projects = () => {

    const [index, setIndex] = useState(0);
    const time = 10000;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="resume-bx wow zoomIn">
                    <h2>Projects</h2>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className="center-container">
                                <div className="project-container">
                                    <div className="experience-information">
                                        <p>Academic tutor for Communication systems subject</p>
                                        <div className="date">
                                            <p>Jul 2021 - Nov 2021</p>
                                        </div>
                                    </div>
                                    <div className="experience-company">
                                        <p>Resource Center for Student Success (CREE), Universidad del Norte. Barranquilla, Colombia.</p>
                                    </div>
                                    <ul className="achievements-list">
                                        <li>Provided academic supervision to students, demonstrating strong mentorship and teaching abilities.</li>
                                        <li>Utilized Python and Matlab for advanced analysis of stochastic processes, showcasing technical expertise in data analysis and programming.</li>
                                        <li>Demonstrated a thorough understanding of AM and FM modulations, frequency and time analysis of signals, and passband and digital communications.</li>
                                        <li>Developed a telegram bot for capturing and decoding NOAA-15 audio signals in real time, highlighting skills in software development and problem-solving.</li>
                                    </ul>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Projects;
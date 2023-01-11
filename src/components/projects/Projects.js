import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import profile from '../../assets/imgs/profile-picture.png';

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
                                        <p>Academic tutor for Communication systems subject</p>
                                    </div>
                                    <div className="project-information">
                                        <div className="project-description">
                                            <div className="center-container">
                                                <Row>
                                                    <Col lg={8} md={12}>
                                                        <div className="text">
                                                            <p align='justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            <ul className="achievements-list">
                                                                <li>Scholarship for education and training in Germany KOSPIE 22/23. German Academic Exchange Service (DAAD), Germany.</li>
                                                                <li>Graduated with honors, 2022. Data Science 4 All. Correlation One.</li>
                                                                <li>Electrical engineering dean's list, 2022-I. Universidad del Norte, Colombia.</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={12}>
                                                        <div className="project-img">
                                                            <img src={profile} alt="Enrique Niebles" />
                                                        </div>
                                                    </Col>
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
                                        <li>Provided academic supervision to students, demonstrating strong mentorship and teaching abilities.</li>
                                        <li>Utilized Python and Matlab for advanced analysis of stochastic processes, showcasing technical expertise in data analysis and programming.</li>
                                    </ul>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='item-fade'>
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
                                        <li>Provided academic supervision to students, demonstrating strong mentorship and teaching abilities.</li>
                                        <li>Utilized Python and Matlab for advanced analysis of stochastic processes, showcasing technical expertise in data analysis and programming.</li>
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
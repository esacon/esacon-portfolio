import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

import projects from './list.js';

const Projects = () => {

    const [index, setIndex] = useState(0);
    const time = 15000;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="resume-bx wow zoomIn">
                    <h2>Projects</h2>
                    <Carousel slide={false} interval={time} activeIndex={index} onSelect={handleSelect}>
                        {projects.map((project, index) => {
                            return <Carousel.Item className='item-fade' key={index}>
                                <div className="center-container">
                                    <div className="project-container">
                                        <div className="project-title">
                                            <p>{project.title}</p>
                                        </div>
                                        <div className="project-information">
                                            <div className="project-description">
                                                <Row>
                                                    <div className={project.img ? 'col-lg-8 col-md-12' : ''}>
                                                        <div className='text'>
                                                            <p align='justify'>{project.desciption}</p>
                                                            <p><b>Technologies:</b></p>
                                                            <ul className="achievements-list">
                                                                {project.techStack.map(item => {
                                                                    return (
                                                                        <li key={item.alt}>
                                                                            <div className="tech-icon" >
                                                                                {item.src && <img className={item.alt === 'Flask' ? 'white-bg' : ''} alt={item.alt} src={item.src}></img>}
                                                                                <p>{item.desc}</p>
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                        {project.buttons && (
                                                            <div className="center-container">
                                                                <div className="download-cv">
                                                                    {project.buttons.map(button => (
                                                                        <div className="link-button" key={button.text}>
                                                                            <a href={button.link} target="_blank" rel="noreferrer">
                                                                                <button>
                                                                                    <div className="center-container">
                                                                                        <Github size='25px' color="#f1f1f1" />
                                                                                        <span>{button.text}</span>
                                                                                    </div>
                                                                                </button>
                                                                            </a>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {
                                                        project.img && (
                                                            <div className='col-lg-4 col-md-12'>
                                                                <div className="project-img">
                                                                    <img src={project.img} alt="Lung-app project." />
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        })}
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
import { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { FileEarmarkPdfFill as File1, Translate as File2 } from "react-bootstrap-icons";

import resume from "./list";
import quotes from "./quotes";

const Resume = () => {
    const [key, setKey] = useState('experience');

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 7000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="resume" id="resume">
            <div className="container">
                <div className="resume-bx wow zoomIn">
                    <h2>About me</h2>
                    <Container>
                        <div className="quote-container">
                            <p className="quote-text">"{quote.text}"</p>
                            <p className="quote-author">- {quote.author}</p>
                        </div>
                    </Container>
                    <Tabs
                        id="resume-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="tabs mb-3"
                        justify
                    >
                        <Tab className="tab-content" eventKey="experience" title="Experience">
                            <div className="experience-container">
                                {
                                    resume.experience.map((experience, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="experience-information">
                                                    <p><ReactMarkdown children={experience.title} rehypePlugins={[rehypeRaw]}/></p>
                                                    <div className="date">
                                                        <p>{experience.date}</p>
                                                    </div>
                                                </div>
                                                <div className="experience-company">
                                                    <p>{experience.company}</p>
                                                </div>
                                                {index < resume.experience.length - 1 ? <hr className="rounded"></hr> : null}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                        <Tab className="tab-content" eventKey="education" title="Education">
                            <div className="experience-container">
                                {
                                    resume.education.map((education, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="education-information">
                                                    <p>{education.title}</p>
                                                    <div className="date">
                                                        <p>{education.date}</p>
                                                    </div>
                                                </div>
                                                <div className="education-company">
                                                    <p>{education.institution}</p>
                                                </div>
                                                {index < resume.education.length - 1 ? <hr className="rounded"></hr> : null}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                        <Tab className="tab-content" eventKey="achievements" title="Achievements">
                            <div>
                                <ul className="achievements-list">
                                    {
                                        resume.achievements.map((achievement, index) => {
                                            return <li key={index}><ReactMarkdown children={achievement} rehypePlugins={[rehypeRaw]}/></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="container">
                        <div className="download-cv">
                            {
                                resume.files.map(file => {
                                    return (
                                        <a href={file.url} rel="noreferrer" target="_blank" download={file.name} key={file.text}>
                                            <button style={file.styles}>
                                                <div className="center-container">
                                                    <File1 size='25px' color="#f1f1f1" />
                                                    <span>{file.text}</span>
                                                </div>
                                            </button>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
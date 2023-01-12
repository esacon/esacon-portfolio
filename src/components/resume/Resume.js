import { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import quotes from "./quotes";
import { FileEarmarkPdfFill as File1, Translate as File2 } from "react-bootstrap-icons";

const Resume = () => {
    const [key, setKey] = useState('experience');

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 10000);
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
                                <div className="experience-information">
                                    <p>Academic tutor for Discrete Structures subject</p>
                                    <div className="date">
                                        <p>Jan 2021 - Jul 2022</p>
                                    </div>
                                </div>
                                <div className="experience-company">
                                    <p>Resource Center for Student Success (CREE), Universidad del Norte. Barranquilla, Colombia.</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="experience-information">
                                    <p>Vice-chair of the Vehicular Technology Society chapter</p>
                                    <div className="date">
                                        <p>Jan 2021 - Jan 2022</p>
                                    </div>
                                </div>
                                <div className="experience-company">
                                    <p>IEEE Student branch Universidad del Norte. Barranquilla, Colombia.</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="experience-information">
                                    <p>Academic tutor for Communication systems subject</p>
                                    <div className="date">
                                        <p>Jul 2021 - Nov 2021</p>
                                    </div>
                                </div>
                                <div className="experience-company">
                                    <p>Resource Center for Student Success (CREE), Universidad del Norte. Barranquilla, Colombia.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab className="tab-content" eventKey="education" title="Education">
                            <div className="experience-container">
                                <div className="education-information">
                                    <p>Computer Science</p>
                                    <div className="date">
                                        <p>Oct 2022 - Present</p>
                                    </div>
                                </div>
                                <div className="education-company">
                                    <p>Technische Universität Ilmenau. Ilmenau, Germany.</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="education-information">
                                    <p>Computer Science and Systems Engineering</p>
                                    <div className="date">
                                        <p>Jul 2019 - Present</p>
                                    </div>
                                </div>
                                <div className="education-company">
                                    <p>Universidad del Norte. Barranquilla, Colombia.</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="education-information">
                                    <p>Electronic Engineering</p>
                                    <div className="date">
                                        <p>Jan 2018 - Nov 2022</p>
                                    </div>
                                </div>
                                <div className="education-company">
                                    <p>Universidad del Norte. Barranquilla, Colombia.</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="education-information">
                                    <p>Data Scientist</p>
                                    <div className="date">
                                        <p>Mar 2022 - Jul 2022</p>
                                    </div>
                                </div>
                                <div className="education-company">
                                    <p>Correlation One</p>
                                </div>
                            </div>
                            <hr className="rounded"></hr>
                            <div className="experience-container">
                                <div className="education-information">
                                    <p>Programming skills training program</p>
                                    <div className="date">
                                        <p>Mar 2021 - Dec 2021</p>
                                    </div>
                                </div>
                                <div className="education-company">
                                    <p>Universidad de Antioquia. Medellín, Colombia.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab className="tab-content" eventKey="achievements" title="Achievements">
                            <div>
                                <ul className="achievements-list">
                                    <li>Scholarship for education and training in Germany KOSPIE 22/23. German Academic Exchange Service (DAAD), Germany.</li>
                                    <li>Graduated with honors, 2022. Data Science 4 All. Correlation One.</li>
                                    <li>Electronic engineering dean's list, 2022-I. Universidad del Norte, Colombia.</li>
                                    <li>Huawei Technologies Seeds for the Future Program 3rd place, 2021. Huawei Technologies.</li>
                                    <li>Seeds for the Future Program scholarship recipient, 2021. Huawei Technologies.</li>
                                    <li>Electronic Engineering dean's list, 2020-II. Universidad del Norte, Colombia.</li>
                                    <li>Sakura Science Exchange Program scholarship recipient, 2017. Japan Science and Technology Agency.</li>
                                    <li>Ser Pilo Paga 4 Scholarship, 2017. ICETEX, Colombia.</li>
                                    <li>Academic Excellence Award, 2017. IDDI Nueva Granada, Colombia.</li>
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="container">
                        <div className="download-cv">
                            <a href="https://drive.google.com/file/d/1Z2IZHY5g2bHEwRLMPRUvh0G6pyuS_zrd/" rel="noreferrer" target="_blank" download="Curriculum.pdf">
                                <button style={{ 'marginRight': '20px' }}>
                                    <div className="center-container">
                                        <File1 size='25px' color="#f1f1f1" />
                                        <span>Curriculum</span>
                                    </div>
                                </button>
                            </a>
                            <a href="https://drive.google.com/file/d/1ZWHAULEcGp8fdb9Vyx6NuTvFNUMTkEA5" rel="noreferrer" target="_blank" download="Lebenslauf.pdf">
                                <button>
                                    <div className="center-container">
                                        <File2 size='25px' color="#f1f1f1" />
                                        <span>Lebenslauf</span>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
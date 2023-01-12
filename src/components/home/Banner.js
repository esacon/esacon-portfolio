import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle, Linkedin, Instagram, Github, Twitter } from 'react-bootstrap-icons';

import profile from '../../assets/imgs/profile-picture.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [colorIndex, setColorIndex] = useState(0);
    const jobText = ['Software Developer', 'Data Scientist', 'Backend-Developer', 'Electronic Engineer'];
    const colors = ['#0092cc', '#6ECCAF', '#FFE9B1', '#D23369'];
    const period = 2000;

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        window.scrollY > 50 ? setIsVisible(false) : setIsVisible(true);
    };

    const tick = () => {
        let i = loopNum % jobText.length;
        let fullText = jobText[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) setDelta(prevDelta => prevDelta / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            colorIndex !== colors.length - 1 ? setColorIndex(colorIndex + 1) : setColorIndex(0);
            setDelta(200);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    });

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="center-container" >
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>Hey! I'm Enrique Niebles</h1>
                            <span className="jobs txt-rotate" style={{ color: colors[colorIndex] }} data-rotate={jobText.toString()}><span className="wrap">{text}</span></span>
                            <p align='justify'>
                                Hola, mi llave 👋! I'm from Colombia 🇨🇴, where the coffee is strong, the music is lively and the people are friendly. I love to travel and discover new places, cultures and cuisines. Uhmm... I may not be a wizard, but my code can make magic happen 😎.
                            </p>
                        </div>
                        <div>
                            <ul className="social">
                                <li key='github'> <a href="https://github.com/esacon" target="_blank" rel="noreferrer"><Github /></a></li>
                                <li key='linkedin'> <a href="https://www.linkedin.com/in/esaconn/" target="_blank" rel="noreferrer"><Linkedin /></a></li>
                                <li key='instagram'> <a href="https://www.instagram.com/shinkai1/" target="_blank" rel="noreferrer" ><Instagram /></a></li>
                                <li key='twitter'> <a href="https://twitter.com/esaconn" target="_blank" rel="noreferrer"><Twitter /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="center-container" xs={12} md={6} xl={5}>
                        <div className="img-container">
                            <div className="circle">
                                <img src={profile} alt="Enrique Niebles" />
                            </div>
                        </div>
                    </Col>
                    <div className="scroll-button">
                        <a href="#resume">
                            <button style={{ display: isVisible ? 'block' : 'none' }}><ArrowDownCircle size='40px' /></button>
                        </a>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
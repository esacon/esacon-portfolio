import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle, Linkedin, Instagram, Github, Twitter } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import profile from '../assets/imgs/profile-pictures.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [colorIndex, setColorIndex] = useState(0);
    const jobText = ['Software Developer', 'Data Scientist', 'Backend-Developer', 'Electronic Engineer'];
    const colors = ['#0092cc', '#6ECCAF', '#FFE9B1', '#D23369']
    const period = 2000;

    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        window.scrollY > 50 ? setIsVisible(false) : setIsVisible(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            <div>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hey! I'm `} <span className="txt-rotate" style={{ color: colors[colorIndex] }} dataPeriod="200" data-rotate={jobText.toString()}><span className="wrap">{text}</span></span></h1>
                                <p align='justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </TrackVisibility>
                        <ul className="social">
                            <li><a href="https://github.com/esacon" target="_blank" rel="noreferrer"><Github /></a></li>
                            <li><a href="https://www.linkedin.com/in/esaconn/" target="_blank" rel="noreferrer"><Linkedin /></a></li>
                            <li><a href="https://www.instagram.com/shinkai1/" target="_blank" rel="noreferrer"><Instagram /></a></li>
                            <li><a href="https://twitter.com/esaconn" target="_blank" rel="noreferrer"><Twitter /></a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            <div>
                                <img src={profile} alt="Enrique Niebles" />
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
                <div className="scroll-button">
                    <a href="#skills">
                        <button style={{ display: isVisible ? 'block' : 'none' }}><ArrowDownCircle size='40px' /></button>
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default Banner;

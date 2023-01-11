import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="newsletter-bx">
                    <Container>
                        <Row className="center-container" >
                            <Col xs={12} md={6} xl={7}>
                                <div>
                                    <h3>Want to get in touch?</h3>
                                    <h4>Send me a message and let's talk!</h4>
                                </div>
                            </Col>
                            <Col className="center-container" xs={12} md={6} xl={5}>
                                <div>
                                    <a href='mailto: esaconn@gmail.com' download>
                                        <button className="email-button">
                                            <div className="center-container">
                                                <img className="email-img" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Mail" />
                                                <span className="email-text">Send email</span>
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Contact;
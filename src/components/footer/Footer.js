import { Linkedin, Instagram, Github, Twitter } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span>Made with ❤️ by <b>Enrique Niebles</b>.</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div>
              <ul className="social" style={{alignItems:'right'}}>
                <li><a href="https://github.com/esacon" target="_blank" rel="noreferrer"><Github /></a></li>
                <li><a href="https://www.linkedin.com/in/esaconn/" target="_blank" rel="noreferrer"><Linkedin /></a></li>
                <li><a href="https://www.instagram.com/shinkai1/" target="_blank" rel="noreferrer"><Instagram /></a></li>
                <li><a href="https://twitter.com/esaconn" target="_blank" rel="noreferrer"><Twitter /></a></li>
              </ul>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
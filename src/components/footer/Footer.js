import { Linkedin, Instagram, Github, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-complete">
        <div className="footer-add ">
          <a href="https://github.com/esacon/esacon-portfolio" rel="noreferrer" target="_blank">
            <span>Made with ❤️ by <b>Enrique Niebles</b>.</span>
          </a>
          <div>
            <ul className="social" style={{ alignItems: "right" }}>
              <li key='github'> <a href="https://github.com/esacon" target="_blank" rel="noreferrer"><Github /></a></li>
              <li key='linkedin'> <a href="https://www.linkedin.com/in/esaconn/" target="_blank" rel="noreferrer"><Linkedin /></a></li>
              <li key='instagram'> <a href="https://www.instagram.com/shinkai1/" target="_blank" rel="noreferrer" ><Instagram /></a></li>
              <li key='twitter'> <a href="https://twitter.com/esaconn" target="_blank" rel="noreferrer"><Twitter /></a></li>
            </ul>
          </div>
        </div>
        <p>Copyright 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
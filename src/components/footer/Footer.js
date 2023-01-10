import { Linkedin, Instagram, Github, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-complete">
        <div className="footer-add ">
          <span>Made with ❤️ by <b>Enrique Niebles</b>.</span>
          <div>
            <ul className="social" style={{ alignItems: "right" }}>
              <li> <a href="https://github.com/esacon" target="_blank" rel="noreferrer"><Github /></a>
              </li>
              <li> <a href="https://www.linkedin.com/in/esaconn/" target="_blank" rel="noreferrer"><Linkedin /></a>
              </li>
              <li> <a href="https://www.instagram.com/shinkai1/" target="_blank" rel="noreferrer" ><Instagram /></a>
              </li>
              <li> <a href="https://twitter.com/esaconn" target="_blank" rel="noreferrer"><Twitter /></a>
              </li>
            </ul>
          </div>
        </div>
        <p>Copyright 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
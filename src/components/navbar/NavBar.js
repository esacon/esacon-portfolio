import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import _ from "lodash";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
            updateActiveLink();
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const thresholds = {
        home: 0.5,
        resume: 0.2,
        skills: 0.7,
        projects: 0.4,
        contact: 0.8
    }

    const updateActiveLink = _.throttle(() => {
        requestAnimationFrame(() => {
            const current = Object.keys(thresholds)
                .reduce((acc, curr) => {
                    const section = document.getElementById(curr);
                    const bounding = section.getBoundingClientRect();
                    const scrollPosition = window.innerHeight * thresholds[curr];
                    if (bounding.top <= scrollPosition && bounding.bottom > scrollPosition) {
                        return curr;
                    } else {
                        return acc;
                    }
                }
                    , "");
            setActiveLink(current);
        });
    }, 100);

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto navbar-link">
                        <Nav.Link href="#home" className={activeLink === "home" ? "navbar-link active" : "navbar-link"}>Home</Nav.Link>
                        <Nav.Link href="#resume" className={activeLink === "resume" ? "navbar-link active" : "navbar-link"}>Resume</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "navbar-link active" : "navbar-link"}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "navbar-link active" : "navbar-link"}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === "contact" ? "navbar-link active" : "navbar-link"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    )
}

export default NavBar;

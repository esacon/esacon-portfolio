import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import _ from "lodash";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
    }, 200);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
            updateActiveLink();
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [updateActiveLink]);

    useEffect(() => {
        const navLink = document.getElementById(`nav-${activeLink}`);
        if (navLink) {
            navLink.classList.add("active");
        }
        return () => {
            if (navLink) {
                navLink.classList.remove("active");
            }
        }
    }, [activeLink]);

    return (
        <Router>
            <Navbar expand="md" className={scrolled || isOpen ? "scrolled" : ""}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto navbar-link">
                        <Nav.Link id="nav-home" href="#home" className='navbar-link'>Home</Nav.Link>
                        <Nav.Link id="nav-resume" href="#resume" className='navbar-link'>Resume</Nav.Link>
                        <Nav.Link id="nav-skills" href="#skills" className='navbar-link'>Skills</Nav.Link>
                        <Nav.Link id="nav-projects" href="#projects" className='navbar-link'>Projects</Nav.Link>
                        <Nav.Link id="nav-contact" href="#contact" className='navbar-link'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    )
}

export default NavBar;

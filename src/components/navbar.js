import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navitem1 from '../assets/img/nav-icon1.svg'
import navitem2 from '../assets/img/nav-icon2.svg'
import navitem3 from '../assets/img/nav-icon3.svg'

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');

    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    } , []);

    const onUpdateActiveLink = (value) => {setActiveLink(value)}



  return (
    <>
      <Navbar expand="lg" className= {scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick= {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick= {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick= {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navitem1} alt=""/></a>
                <a href="#"><img src={navitem2} alt=""/></a>
                <a href="#"><img src={navitem3} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}> <span> Let's Connect</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar

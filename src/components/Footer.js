import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logopin1.png'
import navitem1 from '../assets/img/nav-icon1.svg'
import navitem2 from '../assets/img/nav-icon2.svg'
import navitem3 from '../assets/img/nav-icon3.svg'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row className="align-item-center">
                        <Col sm={6}>
                            <img src={logo} alt="logo" />
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/pinju-priyam"><img src={navitem1} alt="" /></a>
                                <a href="https://www.facebook.com/pinjupriyam"><img src={navitem2} alt="" /></a>
                                <a href="https://www.instagram.com/priyam_pinju"><img src={navitem3} alt="" /></a>
                            </div>
                            <p>copyright © 2024  <br />All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer

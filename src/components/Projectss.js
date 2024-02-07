import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from './ProjectCard';
import unclickable from '../assets/img/unclickable.jpg'
import iphone from '../assets/img/iphone.png'
import qr from '../assets/img/qr.png'
import fl from '../assets/img/fl.png'
import cred from '../assets/img/cred.png'
import zomato from '../assets/img/zomato.png'
import tinder from '../assets/img/tinder.png'

const Projectss = () => {
  const projects = [
    {
      title: "Cred Clone",
      description: "Clone of Cred's site using React",
      imgUrl: cred,
      url: 'https://cred-by-pinju.vercel.app',
    },
    {
      title: 'Zomato Desktop Clone',
      description: 'Clone of Zomato using React, MaterialUI',
      imgUrl: zomato,
      url: 'https://zomato-by-pinju.vercel.app', 
    },
    {
      title: "Tinder Clone",
      description: "Tinder Clone using react, MaterialUi and Firebase",
      imgUrl: tinder,
      url: 'https://tinder-by-pinju.vercel.app'
    },
    {
      title: "Ask her out",
      description: "Website to ask her on a coffe date where she can't click no",
      imgUrl: unclickable,
      url: 'https://pinju-date-proposal.vercel.app/'
    },
    {
      title: "QR Code Generator",
      description: "Generate QR code for anything and everything",
      imgUrl: qr,
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: fl,
    },
  ];
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p> Discover a diverse collection of my craft that reflects my dedication to creating impactful digital experiences. From sleek and intuitive user interfaces to visually compelling graphic designs.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">React</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Javascript</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">CSS</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard key={index}
                            {...project} />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey= "second">
                    <Row>
                      {projects.map((project,index) => {
                        return (
                          <ProjectCard key = {index} {...project} />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey= "third">
                    <Row>
                      {projects.map((project,index) => {
                        return (
                          <ProjectCard key = {index} {...project} />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      <img className="background-image-right" src={colorSharp2} alt='Bro'></img>
      </section>
    </>
  )
}

export default Projectss

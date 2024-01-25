import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import butter from '../assets/img/buutterscotch.jpg'
import red from '../assets/img/red forest.png'
import pink from '../assets/img/pinkpussy.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from './ProjectCard';
import unclickable from '../assets/img/unclickable.jpg'

const Projectss = () => {
  const projects = [
    {
      title: "Ask her out",
      description: "Website to ask her on a coffe that where she can't click no",
      imgUrl: unclickable,
      url: 'https://pinju-date-proposal.vercel.app/'
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: red,
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: pink,
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: pink,
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: butter,
    },
    {
      title: "Sweet Delight",
      description: "Design & Development",
      imgUrl: red,
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
                          <p>{project.title}</p>
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

import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import unclickable from "../assets/img/unclickable.jpg";
import iphone from "../assets/img/iphone.png";
import qr from "../assets/img/qr.png";
import airbnb from "../assets/img/airbnb.png";
import fl from "../assets/img/fl.png";
import cred from "../assets/img/cred.png";
import zomato from "../assets/img/zomato.png";
import tinder from "../assets/img/tinder.png";
import tinder1 from "../assets/img/tinder-logo.png";
import youtbe from "../assets/img/youtube.png";

const Projectss = () => {
  const projects = [
    {
      title: "Cred Clone",
      description: "Clone of Cred's site using React",
      imgUrl: cred,
      url: "https://cred-by-pinju.vercel.app",
    },
    {
      title: "Zomato Desktop Clone",
      description: "Clone of Zomato using React, MaterialUI",
      imgUrl: zomato,
      url: "https://zomato-by-pinju.vercel.app",
    },
    {
      title: "Airbnb Desktop Clone",
      description: "Airbnb Clone using react, MaterialUi and Firebase",
      imgUrl: airbnb,
      url: "https://airbnb-by-pinju.vercel.app",
      // url: 'https://tinder-by-pinju.vercel.app',
    },
    {
      title: "Ask her out",
      description:
        "Website to ask her on a coffe date where she can't click no",
      imgUrl: unclickable,
      url: "https://pinju-date-proposal.vercel.app/",
    },
    {
      title: "QR Code Generator",
      description: "Generate QR code for anything and everything",
      imgUrl: qr,
    },
    {
      title: "YouTube Clone",
      description: "Fully working youtube clone",
      imgUrl: youtbe,
      url: "https://youtube-by-pinju.vercel.app/",
    },
  ];
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p> Here's a collection of some of the recent projects. </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-right"
          src={colorSharp2}
          alt="Bro"
        ></img>
      </section>
    </>
  );
};

export default Projectss;

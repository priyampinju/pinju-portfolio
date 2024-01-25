import React from 'react'
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <>
      <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={url}>check it out</a>
        </div>
      </div>
    </Col>
    </>
  )
}

export default ProjectCard
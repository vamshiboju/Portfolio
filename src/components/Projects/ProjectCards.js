import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (

    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#f0a370" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Website"}
        </Button>
        <Link to={props.ViewLink}>
          <Button variant="primary" style={{ marginLeft: "10px" }}>
            <CiViewTimeline /> &nbsp;
            {"View"}
          </Button>
        </Link>
      </Card.Body>
    </Card >
  );
}
export default ProjectCards;

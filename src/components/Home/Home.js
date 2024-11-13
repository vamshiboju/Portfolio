import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main1.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import ResumeNew from "../Resume/ResumeNew"
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import Toolstack from "../About/Toolstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vamshi Krishna Boju</strong>
              </h1>
              <div className="heading-type" style={{ paddingLeft: 50 }}>
                <br />
                <Type />
                <br />
              </div>
              <p className="home-about-body-1">
                I’m a 💻 Software Engineer and Full-Stack Developer with a deep expertise
                in building innovative, high-performance web applications.
                I excel at developing scalable, user-centric solutions using the
                <i>
                  <b className="purple"> MERN stack and Data structures. </b>
                </i>
                My projects span across diverse
                industries such as social networking, task management, and movie recommendations, delivering impactful results.


                <br />
                <br />All things full-stack: Frontend Development, Backend Programming, API Integration, Database Mangement.
                <br />
                <i>
                  <b className="purple">  Yep, I do them all.</b>
                </i>


                <br />
                <br />
                Let’s build applications that are not just efficient but also engaging.
                Solutions that solve real-world problems, elevate user experience, and drive innovation.

              </p>

            </Col>
            <Col md={5} >
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-section1">
        <Particle />
        <Container>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </section >
  );
}

export default Home;

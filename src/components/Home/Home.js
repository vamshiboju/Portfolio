import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main1.jpg";
import homelogo2 from "../../Assets/homepage1.jpg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Experience from "../Experience";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Text content animated from the right */}
            <Col md={7} className="home-header">
              <motion.div
                initial={{ x: "100vw", opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.25, visualDuration: 1, stiffness: 60, damping: 40 }}
              >
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
                  💻 Full-Stack Developer with over 2+ years of experience in designing and developing robust, scalable web applications using
                  <i>
                    <b className="purple"> Reactjs, Springboot, Node.js, </b>
                  </i>
                  and modern frontend frameworks.
                  Adept at building end-to-end solutions with a strong emphasis on performance, maintainability, and user experience.
                  Experienced in collaborating within
                  <i>
                    <b className="purple"> Agile/Scrum </b>
                  </i>

                  teams to deliver high-quality, iterative software solutions.
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
              </motion.div>
            </Col>

            {/* Image animated from the left */}
            <Col md={5}>
              <motion.div
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", visualDuration: 1, stiffness: 60, damping: 40 }}
              >
                <Tilt>
                  <img
                    src={homelogo2}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Tilt>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <div id="experience_div">
        <Container fluid className="about-section2">
          <Particle />
          <Experience />

        </Container>
      </div>


      <div id="projects_div">
        <Projects />
      </div>


      <div id="skills_div">
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
      </div>


      <div id="contacts_div"><Contact /></div>
    </section >
  );
}

export default Home;

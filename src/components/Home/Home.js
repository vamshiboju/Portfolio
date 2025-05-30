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
          <Container>
            <h1 className="project-heading">
              Professional <strong className="main-name">Experience </strong>
            </h1>

            <p className="home-about-body-2">
              <h1 className="heading-name2">
                <strong className="main-name" ><b className="purple">Pradiota IT Solutions </b> , <b className="main-name"> Fullstack Developer (June 2020- July 2023)  </b></strong>
              </h1>
              • Built and shipped Jujube—India’s 1st e-commerce platform for everyday trade—supporting millions of users, including
              farmers, manufacturers, and small businesses. Contributed across the full frontend stack, enabling nationwide commerce
              with high performance and accessibility.
              <br />
              • Developed and maintained 15+ single-page applications (SPAs) using React.js, HTML5, and CSS3, adhering to
              mobile-first design principles and modern web standards.
              <br />
              • Developed and deployed server-side rendered pages using Next.js, improving first contentful paint by 35% and Google SEO
              metrics by 15%.
              <br />
              • Applied responsive design principles and collaborated with designers via Figma to deliver pixel-perfect UI components,
              achieving 95% QA accuracy and consistent cross-device performance.
              <br />
              • Collaborated with UI/UX teams to design and implement conceptual prototypes, wireframes, and HTML mockups,
              accelerating front-end development cycles by 30% and improving usability scores in stakeholder reviews by 25%.
              <br />
              • Developed and optimized RESTful APIs using Node.js and Express.js, enabling seamless data exchange across services and
              reducing API response time by 35%.
              <br />
              • Built backend APIs using FastAPI and Node.js, reducing API response latency by 20%.
              <br />
              • Built and queried relational databases using PostgreSQL and MySQL, including simple JOINs and indexed lookup queries.
              <br />
              • Applied OOP principles and efficient data structures (trees, maps) in JavaScript (ES6+) to modularize stateful UI logic and
              reduce runtime errors by 25%.
              <br />
              • Deployed scalable applications on AWS EC2 and managed storage with S3, reducing infrastructure costs by 25%.
              <br />
              • Deployed containerized microservices via Docker and Kubernetes, ensuring 100% uptime during production rollouts.
              <br />
              • Participated in CI/CD automation using GitHub Actions and Jenkins, ensuring stable deployments and fast feedback cycles.
              <br />
              • Developed and executed over 150 test cases using Jest, Mocha, and Storybook, maintaining 95%+ test coverage across
              critical UI flows.
              <br />
              • Collaborated with designers, product managers, and QA across 20+ Agile sprints, delivering user-facing features with 98%
              on-time sprint completion rate.
              <br />
            </p>
          </Container>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import moviehub from "../../Assets/Projects/moviehub.png";
import taskmanagment from "../../Assets/Projects/taskmanager.png";
import connectingworld from "../../Assets/Projects/ConnectingWorld.png";
import chatapp from "../../Assets/Projects/Chatapp.png";
import sortvisualizer from "../../Assets/Projects/sortvisualizer.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectingworld}
              isBlog={false}
              title="ConnectingWorld"
              description="A full-stack app visualizing social connections using a graph-based structure. Built with the MERN stack and React Hooks, it reduced page load time by 25% and included features like Get in Touch and People Near You. This project strengthened my skills in graph structures, full-stack development, and UX design. "
              ghLink="https://github.com/vamshiboju/ConnectingWorld-deploy"
              demoLink="https://connectingworld-fe.onrender.com/"
              ViewLink="/connectingworld"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviehub}
              isBlog={false}
              title="MovieHub"
              description="A MERN stack web app that provides personalized movie recommendations with 90% accuracy using a machine learning model. It includes movie search, genre filters, and watchlists, improving user engagement and honing full-stack development and machine learning skills. Built with ReactJS, NodeJS, MongoDB, and CSS."
              ghLink="https://github.com/vamshiboju/MovieHub-deploy"
              demoLink="https://moviehub-5etb.onrender.com"
              ViewLink="/moviehub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanagment}
              isBlog={false}
              title="TaskMate"
              description="The Cloud-Based Task Manager is a MERN stack app for team task management, featuring task assignment,tracking and collaboration features. It uses data structures like trees, stacks, and queues for better performance. Built with ReactJS, NodeJS, and MongoDB."
              ghLink="https://github.com/vamshiboju/TaskMate"
              demoLink="https://taskmate-9kha.onrender.com"
              ViewLink="/taskmate"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatAPP"
              description="An advanced chat application designed to enhance communication through features such as real-time messaging, intelligent filters, and group creation. Developed using ReactJS for a responsive user interface and real-time updates, this web application has significantly strengthened my expertise in front-end development and API integration."
              ghLink="https://github.com/vamshiboju/ChatApp"
              demoLink="https://chatapp-frontend-qpqg.onrender.com"
              ViewLink="/chatapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortvisualizer}
              isBlog={false}
              title="Sort Visualizer"
              description="The Sort Visualizer is a React project that demonstrates five sorting techniques, including bubble sort, quick sort, Insertion sort, merge sort, and selection sort. Users can adjust the visualization speed, allowing them to compare algorithm performance in real-time and deepen their understanding of sorting processes."
              ghLink="https://github.com/vamshiboju/SortVisualizer"
              demoLink="https://sortvisualizer.onrender.com/"
              ViewLink="/sortvisualizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

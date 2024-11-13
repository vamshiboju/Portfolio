import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import CW_Homepage from "./ConnectingWorld/ConnectingWorld_HomePage.png"
import CW_LoginPage from "./ConnectingWorld/ConnectingWorld_LoginPage.png";
import CW_SignupPage from "./ConnectingWorld/ConnectingWorld_SignupPage.png";
import Cw_UserPage from "./ConnectingWorld/ConnectingWorld_UserPage.png";
import Cw_PNU from "./ConnectingWorld/ConnectingWorld_PeopleNearYou.png";
import Cw_GIT from "./ConnectingWorld/ConectingWorld_GetInTouch.png";

const Project1 = () => {
    return (
        <div>
            <Container fluid className="Project-section">


                <Row className="Project-section-Title">
                    Connecting World
                </Row>
                <div className='Project-section-Links'>
                    <Row className='Project-section-Button1'>
                        <Button variant="primary" href='https://github.com/vamshiboju/ConnectingWorld' target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>
                    </Row>
                    <Row className='Project-section-Button2'>
                        <Button variant="primary" className='Project-section-Button' href='https://connectingworld-fe.onrender.com' target="_blank">
                            <CgWebsite /> &nbsp;
                            Website
                        </Button>
                    </Row>
                </div>

                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        About :
                    </div>
                    <div className='Project-section-AboutContent'>
                        Connecting World is a full-stack web application designed to map social connections using graph data structures, where each node represents a user and each edge represents a relationship. This project serves as a platform to visualize and interact with social networks, allowing users to explore connections dynamically and intuitively.
                    </div>
                    <div>
                        <img className='project-image' src={CW_Homepage} alt='homepage' />
                    </div>
                </Row>

                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Login/Signup :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The signup page creates a new user by storing their details and hashed password in the database. The login page authenticates users by verifying their credentials against the stored data.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={CW_LoginPage} alt='homepage' />
                        <img className='project-image' src={CW_SignupPage} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Userpage :
                    </div>
                    <div className='Project-section-AboutContent'>
                        In Connecting World's user page, users are represented as nodes, and their friendships as edges, forming a social network graph where each connection illustrates relationships between users and their friends' circles.
                    </div>
                    <div>
                        <img className='project-image' src={Cw_UserPage} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        People Near You :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The People Near You feature in the "Connecting World" project helps users find others nearby and shows the distance between them. This functionality encourages local connections by allowing users to see how close they are to potential friends, fostering interactions based on geographic proximity.
                    </div>
                    <div >
                        <img className='project-image' src={Cw_PNU} alt='homepage' />

                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Get In Touch :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Get in Touch feature in the "Connecting World" project not only allows users to initiate communication but also shows a connection path, indicating the chain of people through whom they can reach the person. This person-to-person path helps users understand how they are connected and the best way to establish contact.
                    </div>
                    <div >
                        <img className='project-image' src={Cw_GIT} alt='homepage' />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Project1
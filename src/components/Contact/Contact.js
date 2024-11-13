import React from 'react'
import { Container } from 'react-bootstrap'
import Aboutme from './Aboutme'
import { Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedinIn } from "react-icons/fa";
import "@fontsource/poppins";
const Contact = () => {
    return (
        <section>
            <Container fluid className="about-section">
                <div className='about-section-connect'>
                    <div className='about-section-heading'>
                        <p className='about-connect'>Connect with me :)</p>
                        <div className='about-connect-sub' >
                            I’m open to inquiries, collaborations, and exciting job opportunities!🔥<br />
                            Let’s team up to build innovative solutions that drive real impact and shape the future 🚀.
                        </div>
                    </div>
                    <div className='about-section-details'>
                        <div className='about-section-links'>
                            <p className='links-heading'>Email Me</p>
                            <p style={{ fontSize: 14, fontWeight: "lighter" }}>Shoot me an email, I’ll get back to you asap.</p>

                            <Col md="4" className="footer-body">
                                <ul className="footer-icons">
                                    <li className="social-icons" style={{ position: 'sticky' }}>
                                        <a
                                            href="mailto:vamshikrishnaboju11@gmail.com"
                                            style={{ color: "white" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='links-button'>vamshikrishnaboju11@gmail.com</button>
                                        </a>
                                    </li>
                                </ul>
                            </Col>

                        </div>
                        <div className='about-section-links'>
                            <p className='links-heading'>Connect on LinkedIn</p>
                            <p style={{ fontSize: 14, fontWeight: "lighter" }}>Let's connect and share valuable insights.</p>

                            <Col md="4" className="footer-body">
                                <ul className="footer-icons">
                                    <li className="social-icons" style={{ position: 'sticky' }}>
                                        <a
                                            href="https://www.linkedin.com/in/vamshi-krishna-boju-128958291/"
                                            style={{ color: "white" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='links-button'>linkedin.com/in/vamshikrishnaboju</button>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                        <div className='about-section-links'>
                            <p className='links-heading'>FIND ME ON</p>
                            <p style={{ fontSize: 14, fontWeight: "lighter" }}>Feel free to <span className="purple">connect </span>with me.</p>
                            <Col md={12} style={{ padding: 1, position: "sticky " }} className="home-about-social">
                                <ul className="footer-icons">
                                    <li className="social-icons">
                                        <a
                                            href="https://github.com/vamshiboju"
                                            style={{ color: "#cd5ff8" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </li>
                                    <li className="social-icons">
                                        <a
                                            href="https://www.linkedin.com/in/vamshi-krishna-boju-128958291/"
                                            style={{ color: "#cd5ff8" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li className="social-icons">
                                        <a
                                            href="https://leetcode.com/u/vamshivkb/"
                                            style={{ color: "#cd5ff8" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiLeetcode />
                                        </a>
                                    </li>

                                    <li className="social-icons">
                                        <a
                                            href="https://www.instagram.com/vamshi_vkb/"
                                            style={{ color: "#cd5ff8" }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </div>
                </div>
            </Container>
            <Container fluid className="aboutme-section">
                <Container>

                    <h1 className="project-heading">
                        About <strong className="purple">Me </strong>
                    </h1>
                    <div className='section-aboutme'>
                        <Aboutme />
                    </div>
                </Container>
            </Container>
        </section>

    )
}

export default Contact
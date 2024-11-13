import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import SV_1 from "./Sortvisualizer/SV_1.png"
import SV_2 from "./Sortvisualizer/SV_2.png"
import SV_3 from "./Sortvisualizer/SV_3.png"
import SV_4 from "./Sortvisualizer/SV_4.png"
import SV_5 from "./Sortvisualizer/SV_5.png"
import SV_6 from "./Sortvisualizer/SV_6.png"


const Project5 = () => {
    return (
        <div>
            <Container fluid className="Project-section">
                <Particle />

                <Row className="Project-section-Title">
                    Sort Visualizer
                </Row>
                <div className='Project-section-Links'>
                    <Row className='Project-section-Button1'>
                        <Button variant="primary" href='https://github.com/vamshiboju/SortVisualizer' target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>
                    </Row>
                    <Row className='Project-section-Button2'>
                        <Button variant="primary" className='Project-section-Button' href='https://sortvisualizer.onrender.com/' target="_blank">
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
                        Sort Visualizer is an interactive project designed to help users understand various sorting algorithms through visual demonstrations. It supports popular algorithms like Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, and Selection Sort, allowing users to observe and compare their step-by-step processes. The tool enables users to adjust the array size and visualization speed, offering flexibility in how they experience the sorting. Real-time visualization highlights the elements being compared or swapped using different colors, making it easier to follow the logic behind each algorithm. Additionally, performance metrics such as time complexity and the number of comparisons or swaps are displayed, providing valuable insights into each algorithm's efficiency. Sort Visualizer serves as an engaging educational tool, simplifying the learning of sorting techniques by visually breaking down their operations in an intuitive manner.
                    </div>
                    <div>
                        <img className='project-image' src={SV_1} alt='homepage' />
                    </div>
                    &nbsp;
                    &nbsp;
                </Row>

                <Row className='Project-section-About'>
                    <div>
                        <img className='project-image' src={SV_2} alt='homepage' />
                    </div>
                    &nbsp;
                    &nbsp;
                </Row>
                <Row className='Project-section-About'>
                    <div >
                        <img className='project-image' src={SV_3} alt='homepage' />

                    </div>
                    &nbsp;
                    &nbsp;
                </Row>
                <Row className='Project-section-About'>
                    <div >
                        <img className='project-image' src={SV_4} alt='homepage' />
                    </div>
                    &nbsp;
                    &nbsp;
                </Row>
                <Row className='Project-section-About'>
                    <div >
                        <img className='project-image' src={SV_5} alt='homepage' />

                    </div>
                    &nbsp;
                    &nbsp;
                </Row>
                <Row className='Project-section-About'>
                    <div >
                        <img className='project-image' src={SV_6} alt='homepage' />
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default Project5
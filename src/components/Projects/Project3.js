import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import TM_DashBoard from "./TaskMate/ChatApp_DashBoard.png"
import TM_Login from "./TaskMate/ChatApp_Login.png";
import TM_Signup from "./TaskMate/ChatApp_Signup.png";
import TM_Notes from "./TaskMate/ChatApp_Notes.png";
import TM_Task from "./TaskMate/ChatApp_Task.png";
import TM_ToDo from "./TaskMate/ChatApp_ToDo.png";


const Project3 = () => {
    return (
        <div>
            <Container fluid className="Project-section">

                <Row className="Project-section-Title">
                    TaskMate
                </Row>
                <div className='Project-section-Links'>
                    <Row className='Project-section-Button1'>
                        <Button variant="primary" href='https://github.com/vamshiboju/TaskMate' target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>
                    </Row>
                    <Row className='Project-section-Button2'>
                        <Button variant="primary" className='Project-section-Button' href='https://taskmate-9kha.onrender.com/' target="_blank">
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
                        Task Mate is a task management system designed to help users stay organized and manage their tasks efficiently. It comes with several key features that streamline task tracking, note-taking, and reminders, ensuring that users can stay on top of their daily activities.
                    </div>
                </Row>

                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Login/Signup :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Login and Signup feature ensures secure user authentication, allowing individuals to create accounts and log in to access their tasks, notes, and reminders within Task Mate.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={TM_Login} alt='homepage' />
                        <img className='project-image' src={TM_Signup} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        DashBoard:
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Dashboard is the central hub of Task Mate, where users can view all relevant information about their tasks, reminders, and notifications. I have implemented a Priority Queue to display tasks based on their priority or due date, ensuring important tasks are highlighted. Notifications are managed with a Queue, allowing efficient handling of alerts so users stay informed of upcoming tasks and remain focused and organized.
                    </div>
                    <div>
                        <img className='project-image' src={TM_DashBoard} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        TODO List :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The TODO List helps users keep track of their tasks in a checklist format. Users can mark tasks as completed as they go, providing a simple and effective way to manage daily activities. This feature ensures that users stay organized and can track their progress.
                    </div>
                    <div >
                        <img className='project-image' src={TM_ToDo} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Tasks :
                    </div>
                    <div className='Project-section-AboutContent'>
                        Users can create groups within the app, allowing them to chat with multiple people simultaneously and facilitate collaborative conversations. This feature enhances communication by making it easy to engage with friends, family, or colleagues in a shared space.
                    </div>
                    <div >
                        <img className='project-image' src={TM_Task} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Notes :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Notes feature allows users to write, store, and access notes related to their tasks or other important information. I have implemented HashMap to store notes with unique identifiers, ensuring quick access and easy retrieval. Additionally, I have used a Trie to enable efficient searching of notes by keywords or titles, making important details easily accessible when needed.
                    </div>
                    <div >
                        <img className='project-image' src={TM_Notes} alt='homepage' />

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Project3
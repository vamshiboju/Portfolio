import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import CA_GroupChat from "./ChatApp/ChatApp_GroupChat.png"
import CA_LoginPage from "./ChatApp/ChatApp_Login.png";
import CA_SignupPage from "./ChatApp/ChatApp_Signup.png";
import CA_UserPage from "./ChatApp/ChatApp_User.png";
import CA_UserList from "./ChatApp/ChatApp_userlist.png";
import CA_MessageCard from "./ChatApp/ChatApp_MessageCard.png";
import CA_GroupCreate from "./ChatApp/ChatApp_GroupCreate.png";


const Project2 = () => {
    return (
        <div>
            <Container fluid className="Project-section">

                <Row className="Project-section-Title">
                    ChatApp
                </Row>
                <div className='Project-section-Links'>
                    <Row className='Project-section-Button1'>
                        <Button variant="primary" href='https://github.com/vamshiboju/ChatApp' target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>
                    </Row>
                    <Row className='Project-section-Button2'>
                        <Button variant="primary" className='Project-section-Button' href='https://chatapp-frontend-qpqg.onrender.com/' target="_blank">
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
                        ChatApp is a dynamic messaging platform built to enable smooth and effortless communication between users. It features a secure login system, allowing users to easily access their accounts, connect with others, and participate in both private and group conversations.
                    </div>
                </Row>

                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Login/Signup :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The first step for accessing ChatApp is through its Login/Signup system. This ensures that every user is authenticated and has their own account for personal communication. New users can create an account by signing up, while existing users can log in with their credentials. This secure login process ensures that only authorized individuals can access the platform, protecting the privacy of messages and user data.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={CA_LoginPage} alt='homepage' />
                        <img className='project-image' src={CA_SignupPage} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Userpage :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The User Page is the central hub for navigating the app. From here, users can manage account details, access chats and group conversations, and receive notifications about new messages or group activity, keeping them connected and informed.
                    </div>
                    <div>
                        <img className='project-image' src={CA_UserPage} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        UserList :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Userlist shows all contacts available for interaction. Users can browse to see who is online and start a conversation easily. This feature helps quickly identify available friends or colleagues for one-on-one communication.
                    </div>
                    <div >
                        <img className='project-image' src={CA_UserList} alt='homepage' />

                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Message Box :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Message Box hosts all conversations, allowing users to view chats, and send messages. With a simple interface and real-time messaging, users can quickly switch between conversations and track message history.
                    </div>
                    <div >
                        <img className='project-image' src={CA_MessageCard} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Group Creation :
                    </div>
                    <div className='Project-section-AboutContent'>
                        Users can create groups within the app, allowing them to chat with multiple people simultaneously and facilitate collaborative conversations. This feature enhances communication by making it easy to engage with friends, family, or colleagues in a shared space.
                    </div>
                    <div >
                        <img className='project-image' src={CA_GroupCreate} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Group Chat :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Group Chat feature allows users to converse with multiple people simultaneously. Users can exchange messages, share files, and engage in collaborative discussions for team projects, family conversations, or social groups. The app supports real-time messaging, ensuring all participants stay updated with the latest exchanges.
                    </div>
                    <div >
                        <img className='project-image' src={CA_GroupChat} alt='homepage' />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Project2
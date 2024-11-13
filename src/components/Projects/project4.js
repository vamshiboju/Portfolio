import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import MH_HomePage from "./MovieHub/MovieHub_HomePage.png"
import MH_LoginPage from "./MovieHub/MovieHub_LoginPage.png"
import MH_SignupPage from "./MovieHub/MovieHub_SignupPage.png"
import MH_movie from "./MovieHub/MovieHub_Movie.png"
import MH_Tvseries from "./MovieHub/MovieHub_TVseries.png"
import MH_Searchpage from "./MovieHub/MovieHub_SearchPage.png"
import MH_DisplayContent from "./MovieHub/MovieHub_DisplayContent.png"
import MH_videos from "./MovieHub/MovieHub_Videos.png"
import MH_backdrop from "./MovieHub/MovieHub_Backdrops.png"
import MH_reviews from "./MovieHub/MovieHub_Reviews.png"


const Project4 = () => {
    return (
        <div>
            <Container fluid className="Project-section">

                <Row className="Project-section-Title">
                    MovieHub
                </Row>
                <div className='Project-section-Links'>
                    <Row className='Project-section-Button1'>
                        <Button variant="primary" href='https://github.com/vamshiboju/MovieHub-deploy' target="_blank">
                            <BsGithub /> &nbsp;
                            GitHub
                        </Button>
                    </Row>
                    <Row className='Project-section-Button2'>
                        <Button variant="primary" className='Project-section-Button' href='https://moviehub-5etb.onrender.com/' target="_blank">
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
                        Movie Hub is a comprehensive platform designed to provide users with a seamless experience in discovering, viewing, and interacting with movies and TV series. It includes user-friendly features such as login/signup, content browsing, searching, cast details, and user reviews, offering an all-in-one solution for movie and TV enthusiasts.
                    </div>
                    <div>
                        <img className='project-image' src={MH_HomePage} alt='homepage' />
                    </div>
                </Row>

                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Login/Signup :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The Movie Hub application requires users to create an account or log in to access personalized content. This feature ensures a secure, customized experience, allowing users to save their favorite movies and TV series, view personalized recommendations, and write reviews. User authentication is handled efficiently to maintain the privacy and integrity of user data.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={MH_LoginPage} alt='homepage' />
                        <img className='project-image' src={MH_SignupPage} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Movie/TVseries :
                    </div>
                    <div className='Project-section-AboutContent'>
                        Movie Hub offers a well-organized and curated collection of movies and TV series. Users can explore various genres, top-rated lists, and newly released content. The platform also allows users to easily navigate between movies and TV shows, giving them quick access to trailers, descriptions, and other relevant information for each title.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={MH_movie} alt='homepage' />
                        <img className='project-image' src={MH_Tvseries} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Search Page :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The search functionality enables users to look for specific movies or TV series using keywords, genres, or cast names. It provides instant, accurate results, allowing users to filter through vast collections with ease. Whether they’re looking for an obscure indie movie or the latest blockbuster, the search page ensures fast and efficient content discovery.
                    </div>
                    <div >
                        <img className='project-image' src={MH_Searchpage} alt='homepage' />

                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Content View :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The content view page offers detailed information about each movie or TV series, including the cast, synopsis, ratings, and user favorites. Users can see comprehensive details about the actors, their roles, and other relevant crew members, offering a deep dive into the production’s background. It also allows users to mark their favorite movies/TV series for easy access later.
                    </div>
                    <div >
                        <img className='project-image' src={MH_DisplayContent} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Videos/backdrops :
                    </div>
                    <div className='Project-section-AboutContent'>
                        In this section, users can watch trailers, behind-the-scenes videos, and promotional content related to the movie or TV show. Additionally, visually appealing backdrops and high-quality images from the content are displayed, enhancing the user’s overall viewing experience by giving a cinematic touch to the interface.
                    </div>
                    <div className='project-image-Div'>
                        <img className='project-image' src={MH_videos} alt='homepage' />
                        <img className='project-image' src={MH_backdrop} alt='homepage' />
                    </div>
                </Row>
                <Row className='Project-section-About'>
                    <div className='Project-section-AboutTitle'>
                        Reviews :
                    </div>
                    <div className='Project-section-AboutContent'>
                        The reviews section allows users to share their thoughts and opinions about a movie or TV show. Users can write their reviews, rate the content, and view reviews written by others. This feature promotes community interaction, helping users discover hidden gems or avoid poorly rated content based on peer feedback.
                    </div>
                    <div >
                        <img className='project-image' src={MH_reviews} alt='homepage' />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Project4
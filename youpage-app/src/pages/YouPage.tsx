import './landingpage.css';
import NavBar from '../components/NavBar';

const YouPage = () => {
    return (
        <>
            <NavBar />
            <div id="main-content">
                <div id="text-container">
                    <div>
                        <h1>Hi I'm Ant!</h1>
                        <h4>Software Engineer</h4>
                        <p>Phone: 773-627-8527</p>
                        <p>Email: <a href="mailto:aasimmons777@gmail.com">aasimmons777@gmail.com</a></p>
                        <p>linkedin: <a href="https://www.linkedin.com/in/anthony-simmons-0964a6365/" target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                </div>
                <div id="image-container">
                      <img src="/images/Anthony Simmons Headshot.png" alt="Anthony headshot" />
                </div>
            </div>
            <footer>
                <p>© {new Date().getFullYear()} Ant's YouPage. All rights reserved.</p>
            </footer>
        </>
    );
};

export default YouPage;
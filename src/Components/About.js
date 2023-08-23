import { Link } from 'react-router-dom';
import img from "../imgs/frontend.png"
import ui from "../imgs/UI.png"
import html from "../imgs/Technologies/HTML.png"
import css from "../imgs/Technologies/CSS.webp"
import javascript from "../imgs/Technologies/Javascript.png"
import res from "../imgs/Responsive.png"
export const About = () => {
    return(
        <div className="frontbg">
            <div className="homelinks">
                <Link to="/">Home</Link>
                <Link to="/frontend">Frontend</Link>
                <Link to="/competence">Skills</Link>
            </div>
            <div className="aboutpara">
                <div className="frontbody">
                    <div>
                        <h1>What is Frontend development ?</h1>
                        <h3>Definition, Technologies and Roadmap</h3>
                    </div>
                    <img src={img} className="bodyimg" width="400px" style={{borderRadius:"15px"}}/>
                </div>
            </div>
            <div className="fedef">
                <img src={ui} width="250px"/>
                <div className="fetext">
                    <h1>Frontend development :</h1>
                    <p>Frontend development, also known as client-side development, refers to the process of creating the user interface and user experience of a website or web application. Frontend developers are responsible for designing and implementing the visible and interactive components that users see and interact with in a web browser</p>
                </div>
            </div>
            <div style={{"marginTop":"60px"}}>
                <h1 style={{color:"white", textAlign:"center"}}>Basic Frontend technologies ?</h1>
                <div className="skillsContainer">
                    <div className="single">
                        <img src={html} width="100px"/>
                        <div className="singleDesc">
                            <h3>HTML</h3>
                            <p>HTML, which stands for HyperText Markup Language, is a standardized markup language used for creating and structuring content on the World Wide Web</p>
                        </div>
                    </div>
                    <div className="single">
                        <img src={css} width="100px"/>
                        <div className="singleDesc">
                            <h3>CSS</h3>
                            <p>CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the presentation and visual styling of HTML documents</p>
                        </div>
                    </div>
                    <div className="single">
                        <img src={javascript} width="100px"/>
                        <div className="singleDesc">
                            <h3>JavaScript</h3>
                            <p>JavaScript is a high-level, versatile, and widely-used programming language that is primarily known for its role in web development</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resweb">
                <div className="restext">
                    <h1>Responsive Web Design</h1>
                    <p> Frontend developers must ensure that web applications are accessible and usable across a wide range of devices and screen sizes. This involves creating responsive layouts that adapt to different screen resolutions and orientations.</p>
                </div>
                <img src={res} className='resimg' width="300px" style={{"borderRadius":"15px"}}/>
            </div>
            <h3 className='name' style={{"color":"white", "textAlign":"center", "fontStyle":"italic", "marginTop":"50px"}}>@MedArg04</h3>
        </div>
        
    )
}
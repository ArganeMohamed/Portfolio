import { Link } from 'react-router-dom';
import html from "../imgs/Technologies/HTML.png"
import css from "../imgs/Technologies/CSS.webp"
import react from "../imgs/Technologies/React.webp"
import javascript from "../imgs/Technologies/Javascript.png"
import bootstrap from "../imgs/Technologies/Bootstrap.png"
import vue from "../imgs/Technologies/VueJS.png"
export const Competence = () => {
    return(
        <div className="skillsbg">
            <div className="homelinks">
                <Link to="/">Home</Link>
                <Link to="/frontend">Frontend</Link>
                <Link to="/competence">Skills</Link>
            </div>
            <div className="skillsContainer">
                <div className="single">
                    <img src={html} width="100px"/>
                    <div className="singleDesc">
                        <h3>HTML</h3>
                        <p>HTML, which stands for HyperText Markup Language, is a standardized markup language used for creating and structuring content on the World Wide Web</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"100%", "height":"100%", "textAlign":"center","color":"white"}}>100%</div>
                        </div>
                    </div>
                </div>
                <div className="single">
                    <img src={css} width="100px"/>
                    <div className="singleDesc">
                        <h3>CSS</h3>
                        <p>CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the presentation and visual styling of HTML documents</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"100%", "height":"100%", "textAlign":"center","color":"white"}}>100%</div>
                        </div>
                    </div>
                </div>
                <div className="single">
                    <img src={javascript} width="100px"/>
                    <div className="singleDesc">
                        <h3>JavaScript</h3>
                        <p>JavaScript is a high-level, versatile, and widely-used programming language that is primarily known for its role in web development</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"100%", "height":"100%", "textAlign":"center","color":"white"}}>100%</div>
                        </div>
                    </div>
                </div>
                <div className="single">
                    <img src={bootstrap} width="100px"/>
                    <div className="singleDesc">
                        <h3>Bootstrap</h3>
                        <p>Bootstrap is a popular open-source front-end framework for web development. It was originally created by Twitter and is now maintained by the Bootstrap community</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"100%", "height":"100%", "textAlign":"center","color":"white"}}>100%</div>
                        </div>
                    </div>
                </div>
                <div className="single">
                    <img src={react} width="100px"/>
                    <div className="singleDesc">
                        <h3>ReactJS</h3>
                        <p>ReactJS, commonly referred to as React, is an open-source JavaScript library for building user interfaces (UIs) and user interface components</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"100%", "height":"100%", "textAlign":"center","color":"white"}}>100%</div>
                        </div>
                    </div>
                </div>
                <div className="single">
                    <img src={vue} width="100px"/>
                    <div className="singleDesc">
                        <h3>VueJS</h3>
                        <p>ReactJS, commonly referred to as React, is an open-source JavaScript library for building user interfaces (UIs) and user interface components</p>
                        <div className="bar" style={{"width":"80%", "height":"20px", "margin":"auto", "marginTop":"15px"}}>
                            <div className="percent" style={{"width":"70%", "height":"100%", "textAlign":"center","color":"white"}}>70%</div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='name' style={{"color":"white", "textAlign":"center", "fontStyle":"italic", "marginTop":"50px"}}>@MedArg04</h3>
        </div>
        
    )
}
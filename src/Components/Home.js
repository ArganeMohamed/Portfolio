import { Link } from 'react-router-dom';
import img from "../imgs/web.jpg"
export const Home = () => {
    return(
        <div className="homebg">
            <div className="homelinks">
                <Link to="/">Home</Link>
                <Link to="/frontend">Frontend</Link>
                <Link to="/competence">Skills</Link>
            </div>
            <div className="homepara">
                <div>    
                    <h1>Hi There,</h1>
                    <h3>I'm a Frontend Developer</h3>
                </div>
                <img src={img} className="homeimg" style={{borderRadius:"15px"}}/>
            </div>
        </div>
        
    )
}
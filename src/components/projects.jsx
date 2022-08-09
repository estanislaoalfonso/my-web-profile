import '../style/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Projects = () => {



    return (
    <>
        <h1 className = 'projectTitle'>
            MY PERSONAL PROJECTS    
        </h1>
        
        <div className="projectsContainer">

            <div className="projectCard">
                <div className='imageContainerECommerce'>
                </div>
                <div className= "cardDescription">
                    <h3>Desktop e-commerce web app</h3>
                    <p>This desktop web app simulates an Apple products reseller. It was builded in react, and deployed in Netlify.</p>
                    <a href="https://appleicommerce.netlify.app/" target='_blank' rel='noreferrer'> Go to the website</a>
                </div>
            </div>

            <div className="projectCard">
                <div className='imageContainerCoffee'>
                </div>
                <div className = "cardDescription">
                    <h3>Desktop coffee web app</h3>
                    <p>This website was my first project ever. It was builded with HTML, SASS and JS. Deployed with GitHub pages.</p>
                <a href="https://estanislaoalfonso.github.io/MalvonCoffeeRoasters/" target='_blank' rel='noreferrer'> Go to the website</a>
                </div>
            </div>
        </div>
        
        <Link to='/' className='homeLinkProject'>
            <FontAwesomeIcon icon={faHouse}/>
        </Link>
    </>
)
}

export default Projects
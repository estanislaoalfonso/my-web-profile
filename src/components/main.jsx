import '../style/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faEnvelope}  from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import pdf from '../documents/CV_EstanislaoAlfonso_EN.pdf'




const Main = () => {
    return (
        <div className='mainContainer'>
            <img src="https://i.imgur.com/rG2gM0G.jpg" alt="foto principal" />
            <ul>
                <li>
                    <FontAwesomeIcon icon= {faGithub}/>
                    <a href="https://github.com/estanislaoalfonso" target="_blank" rel='noreferrer'>GitHub</a>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faLinkedin}/>
                    <a href="https://www.linkedin.com/in/estanislao-alfonso-a6686b107/" target="_blank" rel='noreferrer'>LinkedIn</a>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faFolderOpen} />
                    <a href={pdf} target="_blank" rel='noreferrer'>My CV</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link to = "/emailForm">estanislao.alf@gmail.com</Link>
                </li>
            </ul>
        </div>
    )
}

export default Main;
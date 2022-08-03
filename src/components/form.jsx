import "../style/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

const Form = () => {
    return (
        <div className="formGeneral">
        <form className="formContainer">
            <h2>Leave me a message !</h2>
            <input type="text" className="formFromBox" placeholder="Your name"/>  
            <input type="text" className="formFromBox" placeholder="Your e-mail"/>
            <input type="text" className="formFromBox" placeholder="Subject"/>
            <textarea type="text" className="formMessageBox"/>
            <button type="submit" className="formButton">SEND</button>
            
            <Link to='/'>
                <FontAwesomeIcon icon={faHouse} className='houseIcon'/>
            </Link>
        </form>
        </div>
    )
}


export default Form
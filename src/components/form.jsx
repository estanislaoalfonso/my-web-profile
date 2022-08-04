import "../style/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ra50zye", "contact_form", form.current, "Sp7pvEG-Z1c5mUt8z")
        .then (
            result => {
                alert ('Correo enviado correctamente');
            },
        error => {
            alert (`Error found, try again - ${error}`)
        }
        )
    }

    return (
        <div className="formGeneral">
        <form ref={form} className="formContainer" onSubmit={sendEmail}>
            <h2>Leave me a message !</h2>
            <input type="text" className="formFromBox" placeholder="Your name" name="from_name"/>  
            <input type="text" className="formFromBox" placeholder="Your e-mail" name="user_email"/>
            {/* <input type="text" className="formFromBox" placeholder="Subject"/> */}
            <textarea type="text" className="formMessageBox" name="message"/>
            <button type="submit" className="formButton">SEND</button>
            
            <Link to='/'>
                <FontAwesomeIcon icon={faHouse} className='houseIcon'/>
            </Link>
        </form>
        </div>
    )
}


export default Form
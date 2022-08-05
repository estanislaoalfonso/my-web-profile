import "../style/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const form = useRef();
    const nameResetValues = useRef();
    const emailResetValues = useRef();
    const textAreaResetValues = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ra50zye", "contact_form", form.current, "Sp7pvEG-Z1c5mUt8z")
        .then (
            result => {
                alert ('Thank you! =). Your e-mail has been sent. I will give you my feedback as soon as possible !.');
            },
        error => {
            alert (`Something went wrong, please try to contact me again.`)
        }
        )
        .then (nameResetValues.current.value = "",
        emailResetValues.current.value = "",
        textAreaResetValues.current.value = "")

    }

    return (
        <div className="formGeneral">
        <form ref={form} className="formContainer" onSubmit={sendEmail}>
            <h2>Leave me a message !</h2>
            <input type="text" className="formFromBox" placeholder="Your name" name="from_name" ref={nameResetValues}/>  
            <input type="text" className="formFromBox" placeholder="Your e-mail" name="user_email" ref={emailResetValues}/>
            <textarea type="text" className="formMessageBox" name="message" ref={textAreaResetValues}/>
            <button type="submit" className="formButton">SEND</button>
            
            <Link to='/'>
                <FontAwesomeIcon icon={faHouse} className='houseIcon'/>
            </Link>
        </form>
        </div>
    )
}


export default Form
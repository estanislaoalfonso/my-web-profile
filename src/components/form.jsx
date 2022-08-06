import "../style/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const form = useRef();
    const nameValue = useRef();
    const emailValue = useRef();
    const textAreaValue = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        //Validaciones de formulario
        if (nameValue.current.value.length < 3) {
            alert ('Invalid name. Please type a valid name.');
        } else if (!emailRegex.test(emailValue.current.value)) {
            alert ('Invalid email. Please type a valid email.')
        } else if (textAreaValue.current.value.length < 1) {
            alert ('Please type something on the text area before send')
        } 
        // Si las validaciones se cumplen, se envía el formulario
        else {
            emailjs.sendForm("service_ra50zye", "contact_form", form.current, "Sp7pvEG-Z1c5mUt8z")
            .then (
                result => {
                    alert ('Thank you! =). Your e-mail has been sent. I will give you my feedback as soon as possible !.');
                },
            error => {
                alert (`Something went wrong, please try to contact me again.`)
            }
            )
            .then (nameValue.current.value = "",
            emailValue.current.value = "",
            textAreaValue.current.value = "")
        }
    }

    return (
        <div className="formGeneral">
        <form ref={form} className="formContainer" onSubmit={sendEmail}>
            <h2>Leave me a message !</h2>
            <input type="text" className="formFromBox" placeholder="Your name" name="from_name" ref={nameValue}/>  
            <input type="text" className="formFromBox" placeholder="Your e-mail" name="user_email" ref={emailValue}/>
            <textarea type="text" className="formMessageBox" name="message" ref={textAreaValue}/>
            <button type="submit" className="formButton">SEND</button>
            
            <Link to='/'>
                <FontAwesomeIcon icon={faHouse} className='houseIcon'/>
            </Link>
        </form>
        </div>
    )
}


export default Form
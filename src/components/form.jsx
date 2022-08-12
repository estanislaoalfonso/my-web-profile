//REACT
import React, { useRef, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
//CSS
import "../style/form.css";
// EMAIL and other stuffs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';
import Loader from './loader';
import swal from 'sweetalert';

const Form = () => {

    const form = useRef();
    const nameValue = useRef();
    const emailValue = useRef();
    const textAreaValue = useRef();

    const [flag, setFlag] = useState (false)
    let navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        setFlag(true);
        
        //Setting email validations
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        //Validaciones de formulario
        if (nameValue.current.value.length < 3) {
            swal({
                title: "Invalid name",
                text: "Please type a valid name.",
                icon: "error",
                button: "Ok!",
              })
            setFlag(false)
        } else if (!emailRegex.test(emailValue.current.value)) {
            swal({
                title: "Invalid e-mail!",
                text: "Please type a valid email.",
                icon: "error",
                button: "Ok!",
              })
            setFlag(false)
        } else if (textAreaValue.current.value.length < 1) {
            swal({
                title: "Text area is empty!",
                text: "Please type something on the text area before send.",
                icon: "error",
                button: "Ok!",
              })
            setFlag(false)
            
        } 
        // Si las validaciones se cumplen, se envía el formulario
        else {
                emailjs.sendForm("service_ra50zye", "contact_form", form.current, "Sp7pvEG-Z1c5mUt8z")
            .then (
                result => {
                    swal({
                        title: "Great!",
                        text: "Your e-mail has been sent. I will give you my feedback as soon as possible!",
                        icon: "success",
                        button: "Thank you!",
                      })
                },
            error => {
                swal({
                    title: "Uuuups!",
                    text: "Something went wrong, please try again.",
                    icon: "error",
                    button: "Ok!",
                  })
            }
            )
            .then (
                setFlag(false),
                nameValue.current.value = "",
                emailValue.current.value = "",
                textAreaValue.current.value = "",
                navigate('/')
            )
        }
        
    }

    return (
        <>
        {flag ? <Loader/> : 
        
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

        }
        </>
    )
}


export default Form
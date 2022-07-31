import "../style/form.css"

const Form = () => {
    return (
        <form action="" className="formContainer">
            <h2>What's your name ?</h2>
            <input type="text" className="formFromBox"/>  
            
            <h3>What can I help you with ? </h3>
            <input type="text" className="formSubjectBox"/>

            <input type="text" className="formMessageBox"/>

            <button type="submit" className="formButton">SEND</button>
        </form>
    )
}


export default Form
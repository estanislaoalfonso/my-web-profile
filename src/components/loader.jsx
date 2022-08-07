import '../style/loader.css';
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className='spinnerContainer'>
            <TailSpin color="#BAEFF9"/>
        </div>
)
}

export default Loader
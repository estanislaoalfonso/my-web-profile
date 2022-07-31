import Main from './components/main';
import Form from './components/form';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/home" element = {<Main/>}/>
          <Route exact path="/emailForm" element = {<Form/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

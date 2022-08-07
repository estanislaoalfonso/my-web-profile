import Main from './components/main';
import Form from './components/form';
import Projects from './components/projects';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element = {<Main/>}/>
          <Route exact path="/emailForm" element = {<Form/>}/>
          <Route exact path="/projects" element = {<Projects/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
  <div className="App"> 
  <Nav/>
  <Routes>
    <Route path ='/'element={<Home/>}></Route>
    <Route path ='/Nav'element={<Home/>}></Route>
    <Route path ='/about'element={<About/>}></Route>
    <Route path ='/contact'element={<Contact/>}></Route>
  </Routes>
  </div>
  );
}

export default App;
import {Route,Routes} from "react-router-dom"
import Login from "./Pages/login";
import Signup from "./Pages/register";
import Home from "./Pages/Home";
import Pla from "./Pages/plan";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Plans" element={<Pla/>}></Route>
   

        </Routes>
    </div>
  );
}

export default App;
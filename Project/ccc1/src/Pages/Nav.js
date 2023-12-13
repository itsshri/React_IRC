import "../Assets/Css/Nav.css"
import { Link } from "react-router-dom";
const Navbar= () =>{
    return (
    <div class="nav">
        <ul>
      <li>
        <Link to="/Plans">Plans</Link>
        <Link to="/Home">Home</Link>
      </li>
        </ul>
    </div>
    );
  }
  export default Navbar;
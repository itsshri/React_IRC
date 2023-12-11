//Arrow Function:
import "./Nav.css";
const Nav=()=>
{
    return(
        <>
        <div className="navbar">
            <center>
                Nav
            </center>
            <ul className="nav-links">
                <li><a href="/">Login</a></li>
                <li><a href="/">Sign-Up</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
            </ul>
        </div>

        </>
    )
}

export default Nav;


// //Normal Function:

// // function Nav(){
// //     return(
// //         <>
// //         <h1>NavBar</h1>
// //         </>
// //     )
// // }

// // export default Nav;
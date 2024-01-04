import React from 'react';
import '../Styles/Dashboard.css';
import {Link} from 'react-router-dom';

{/* <Link to="/">
<a href="#">Logout</a>
</Link> */}
const Dashboard= () => {
  return (
    <main className="main">
      <aside className="sidebar">
        <nav className="nav">
            {/* <li className="active"><a href="#">Welcome</a></li> */}
          <ul>

            <Link to="/Signup">
            <li>Register</li>
            </Link>
            
          
          </ul>
          <ul>

            <Link to="/">
            <li>Logout 📤</li>
            </Link>
          </ul>
            
        </nav>
      </aside>
    
      <section className="twitter">
        <div className="container">
        </div>
      </section>
    </main>
      // <section>
      //   <div id="parallax" className="parallax-item">
      //     <h2>Div 1</h2>
      //   </div>
      //   <div className="parallax-item">
      //     <h2>Div 2</h2>
      //   </div>
      //   <div className="parallax-item">
      //     <h2>Div 3</h2>
      //   </div>
      //   <div className="parallax-item">
      //     <h2>Div 4</h2>
      //   </div>
      // </section>

  );
}

export default Dashboard;

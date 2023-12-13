import "../Assets/Css/Home.css";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    
    <Navbar/>
    <br></br>
    <br></br>
    <div className="main">
      <h1 className="title">Where's Next?</h1>
      <h1 className="cap">Plan your Travel Now!</h1>
      <h2></h2>
      <h2></h2>

      <div className="container">
        {/* First Card */}
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1153474571/photo/beautiful-aerial-view-of-zurich-switzerland.jpg?s=612x612&w=0&k=20&c=lxaIBqP5wWLWdTOeJUT8vXw8RqIU6EJOwhhYl6sljBQ="
            alt="sd"
          />
          <div className="content">
            <h5 className="font">Geneva</h5>
            <h2></h2>
            <h4 className="font">92%❤️</h4>
            <a href="https://www.geneve.com/">Explore!</a>
          </div>
        </div>

        {/* Second Card */}
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/908264570/photo/swiss-train-in-the-alps-mountains-in-switzerland-around-ospizio-bernina.jpg?s=612x612&w=0&k=20&c=PWGf3ToBpPEvwgG0HLWnQetvgJH3AIXssgDRloXLCt4="
            alt="asd"
          />
          <div className="content">
            <h5 className="font">Basel</h5>
            <h5 className="font">Popular📈</h5>
            <h4 className="font">93%❤️</h4>
            <a href="https://www.basel.com/en">Explore</a>
          </div>
        </div>

        {/* Third Card */}
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/842920834/photo/zurich-switzerland.jpg?s=612x612&w=0&k=20&c=Oaz54GNEBUODyv7ZrPLI-HYM9DmMeHonVkKGZTx1nV8="
            alt="ssd"
          />
          <div className="content">
            <h5 className="font">Zurich</h5>
            <h4 className="font">93%❤️</h4>
            <a href="https://www.myswitzerland.com/en-in/destinations/zurich-1/">Explore</a>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1198004289/photo/davos-city-winter-blue-hour-night-scene-davos-switzerland.jpg?s=612x612&w=0&k=20&c=LmIQ5A6m3U3SKlMivbRYdl85OxLqv8E2PRewoWSlNgo="
            alt="hsj"
          />
          <div className="content">
            <h5 className="font">Saint Moritz</h5>
            <h4 className="font">93%❤️</h4>
            <a href="https://www.myswitzerland.com/en/destinations/st-moritz/">Explore</a>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;

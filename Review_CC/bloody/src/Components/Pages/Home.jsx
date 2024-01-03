import '../Styles/Home.css';
import Footer from '../Pages/Footer';


const Home = () => {
  return (
    <>
      <div className="mains">
      <h1 className="titles"></h1>
      <h2></h2>
      <h2></h2>

      <div className="containers">
      <h1 className="caps">Ecstacy of Swiss</h1>
        {/* Geneva */}
        <div className="cards">
          <img
            src="https://media.istockphoto.com/id/1056772492/photo/aerial-view-of-geneva-city.jpg?s=2048x2048&w=is&k=20&c=eV5RIrxi6MhKFE7pdjrx8XSujga6Vj691xxvD5w-amg="
            alt="sd"
            />
          <div className="contents">
            <h1 className="fonts">Geneva</h1>
            <h2></h2>
            <center>

            <h2 className="fonts">92%❤️</h2>
            </center>
            <a href="https://www.geneve.com/">Explore!</a>
          </div>
        </div>

        {/* Basel */}
        <div className="cards">
          <img
            src="https://media.istockphoto.com/id/1408347599/photo/basel-historic-upper-town-architecture-evening-view.jpg?s=2048x2048&w=is&k=20&c=LnlvlgaKQqDJrK-rHmrvNfOimL9zoat_GTaq25sYG_Y="
            alt="asd"
            />
          <div className="contents">
            <h1 className="fonts">Basel</h1>
            <h2></h2>
            <center>
            <h2 className="fonts">Popular📈</h2>
            {/* <h2></h2> */}
            <h2 className="fonts">93%❤️</h2>
            </center>
            <a href="https://www.basel.com/en">Explore</a>
          </div>
        </div>

        {/* Zurich */}
        <div className="cards">
          <img
            src="https://media.istockphoto.com/id/521201094/photo/historic-city-of-zurich-with-river-limmat-switzerland.jpg?s=2048x2048&w=is&k=20&c=w4421dKXBdjGlBGCaIvLSdYNBoyzlqFug0_6kAqUsUk="
            alt="ssd"
            />
          <div className="contents">
            <h1 className="fonts">Zurich</h1>
            <h2></h2>
            <center>

            <h2 className="fonts">93%❤️</h2>
            </center>
            <a href="https://www.myswitzerland.com/en-in/destinations/zurich-1/">Explore</a>
          </div>
        </div>

        {/* Saint Moritz*/}
        <div className="cards">
          <img
            src="https://media.istockphoto.com/id/539167007/photo/aerial-view-on-zermatt-valley-and-matterhorn-peak-at-dawn.jpg?s=2048x2048&w=is&k=20&c=beFZpf9sJmRFwEIa2Lt7P3q1612L458vRmEeVMcbbsI="
            alt="hsj"
            />
          <div className="contents">
            <h1 className="fonts">Saint Moritz</h1>
            <h2></h2>
            <center>
            <h2 className="fonts">93%❤️</h2>
            </center>
            <a href="https://www.myswitzerland.com/en/destinations/st-moritz/">Explore</a>
  
          </div>
        </div>
      </div>
    </div>
<div>

</div>
    </>
  );
};

export default Home;
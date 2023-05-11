import hero from "../img/hero.png";


function Home() {
    return (
         <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Solodiuk Oleksandr.</span>
            A Web Developer.
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Neque blanditiis sed aut!
          </p>
        </div>
      </div>
    </header>
    )
 }
export default Home;
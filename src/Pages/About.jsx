


function About() {
    return (
   <section className="container about active" id="about">
        <div className="main-title">
          <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
        </div>
        <div className="about-container">
          <div className="left-about">
            <h4>Information About me</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              labore nihil obcaecati consequatur. Debitis error doloremque, vero
              eos vel nemo eius voluptatem dicta tenetur modi. <br />
              <br />
              La musica delectus dolore fugiat exercitationem a, ipsum quidem
              quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Harum non
              necessitatibus deleniti eum soluta.
            </p>
          </div>
          <div className="right-about">
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">30+</p>
                <p className="small-text">
                  Projects <br />
                  Completed
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">1+</p>
                <p className="small-text">
                  Years of <br />
                  experience
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">20+</p>
                <p className="small-text">
                  Happy <br />
                  Clients
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">40+</p>
                <p className="small-text">
                  Customer <br />
                  reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <h4 className="stat-title">My Skills</h4>
          <div className="progress-bars">
            <div className="progress-bar">
              <p className="prog-title">html5</p>
              <div className="progress-con">
                <p className="prog-text">80%</p>
                <div className="progress">
                  <span className="html"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">css</p>
              <div className="progress-con">
                <p className="prog-text">90%</p>
                <div className="progress">
                  <span className="css"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">javascript</p>
              <div className="progress-con">
                <p className="prog-text">55%</p>
                <div className="progress">
                  <span className="js"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">ReactJS</p>
              <div className="progress-con">
                <p className="prog-text">40%</p>
                <div className="progress">
                  <span className="react"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">NodeJS</p>
              <div className="progress-con">
                <p className="prog-text">37%</p>
                <div className="progress">
                  <span className="node"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">BEM</p>
              <div className="progress-con">
                <p className="prog-text">50%</p>
                <div className="progress">
                  <span className="bem"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    )
 }
export default About;
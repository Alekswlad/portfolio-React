import port1 from "../img/port1.jpg";
import port2 from "../img/port2.jpg";
import port3 from "../img/port3.jpg";
import port4 from "../img/port4.jpg";
import port5 from "../img/port5.jpg";
import port6 from "../img/port6.jpg";

import {FaGithub, FaBehanceSquare,  FaFacebookF, FaTwitter, FaYoutube, FaDownload} from 'react-icons/fa';


function Portfolio() {
    return (
       <section className="container active" id="portfolio">
        <div className="main-title">
          <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
        </div>
        <p className="port-text">
          Here is some of my work that I've done in various programming
          languages.
        </p>
        <div className="portfolios">
          <div className="portfolio-item">
            <div className="image">
              <img src={port1} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="image">
              <img src={port2} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="image">
              <img src={port3} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="image">
              <img src={port4} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="image">
              <img src={port5} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="image">
              <img src={port6} alt="" />
            </div>
            <div className="hover-items">
              <h3>Project Source</h3>
              <div className="icons">
                <a href="#" className="icon">
                  <FaGithub className="fab fa-github"/>
                </a>
                <a href="#" className="icon">
                  <FaBehanceSquare className="fab fa-behance"/>
                </a>
                <a href="#" className="icon">
                  <FaYoutube className="fab fa-youtube"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <div className="main-title">
            <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <div className="contact-icons">
                <div className="contact-icon">
                  <a href="#" target="_blank">
                    <FaFacebookF className="fab fa-facebook-f"/>
                  </a>
                  <a href="#" target="_blank">
                    <FaTwitter className="fab fa-twitter"/>
                  </a>
                  <a href="#" target="_blank">
                    <FaGithub className="fab fa-github"/>
                  </a>
                  <a href="#" target="_blank">
                    <FaYoutube className="fab fa-youtube"></FaYoutube>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-contact">
              <div className="submit-btn">
                <a href="#" className="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon"><FaDownload className="fas fa-download"/></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 }
export default Portfolio;
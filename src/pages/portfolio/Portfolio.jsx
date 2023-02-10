import "./portfolio.css"
import { GiAmpleDress, GiEightBall } from "react-icons/gi";
import { FaPizzaSlice, FaCarrot } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { useState } from "react";



const Projects = () => {
  const [fall, setFall] = useState(false);

  const githubFall = () => {
    console.log(window.scrollY)
      if (window.scrollY > 1000) {
        setFall(true)
      } else {
        setFall(false)
      }
  }

  window.addEventListener('scroll', githubFall)

 
  return (
    <div className="projects-container" id="portfolio">
      <h1 className="portfolio-headline">Projects</h1>
      <section className="first-row">
        <div className="box1">
        <h1 className="project-title">Raw Food</h1>
          <FaCarrot className="fashion-icon"/>
          <p className="sub">React, JavaScript</p>
          <a href="https://raw-food.vercel.app/" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
        <div className="divider"></div>
        <div className="box2">
        <h1 className="project-title">3D-Game</h1>
          <IoGameController className="japan-icon"/>
          <p className="sub">
            Unity, C#
          </p>
            <a href="https://play.unity.com/mg/other/carin-s-first-game" target="_blank">
              <button className="view-button">View</button>
            </a>
        </div>
        <div className="divider"></div>
        <div className="box3">
          <h1 className="project-title">Bird Game</h1>
          <IoGameController className="todo-icon"/>
          <p className="sub">Phaser, JavaScript</p>
          <a href="https://carinwood-the-bird-game.netlify.app/" target="_blank">
          <button className="view-button">View</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;

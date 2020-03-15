import React from "react";
import "../static/styling/about.css";
import profilepicture from "../static/img/profilepicture.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Tabs, Tab } from "@material-ui/core";
import About from "./About";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newTab) => {
      setValue(newTab)
  };

  return (
    <div className="container">
      <div className="profile-header">
        <a href="https://angelosolitario.github.io/portfolio/">
          <img
            className="profile-picture"
            src={profilepicture}
            alt="angelo-solitario"
          ></img>
        </a>

        <br />

        <a
          href="https://github.com/angelosolitario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        <a
          href="https://linkedin.com/in/angelosolitario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          href="https://instagram.com/angelosolitario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <h1>ANGELO SOLITARIO</h1>

        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About Me" />
            <Tab label="Projects" />
            <Tab label="Resumé" />
          </Tabs>
        </Paper>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Main;
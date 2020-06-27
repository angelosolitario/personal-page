import React from "react";
import "../static/styling/main.css";
import profilepicture from "../static/img/profilepicture.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "react-tabs/style/react-tabs.scss";
import Particles from "react-particles-js";

const Main = () => {
    return (
        <div className="main-container">
            <div id="social-media">
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
            </div>

            <h1>ANGELO SOLITARIO</h1>
            <Particles
                id="particles"
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 5000,
                            },
                        },
                        size: {
                            value: 10,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Main;
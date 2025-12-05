import React from "react";
import "../FooterComponent/FooterComponent.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <p className="footer-text">
                    © {new Date().getFullYear()} Anbuselvan A — Built with React ⚛️
                </p>

                <div className="footer-icons">

                    <a
                        href="https://github.com/Anbuselvan04"
                        target="_blank"
                        className="footer-icon"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anbuselvan1506/"
                        target="_blank"
                        className="footer-icon"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:anbuselvanat15@gmail.com"
                        className="footer-icon"
                    >
                        <FaEnvelope />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default FooterComponent;

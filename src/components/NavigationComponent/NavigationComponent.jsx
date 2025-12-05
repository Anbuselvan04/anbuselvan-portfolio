import React, { useState } from "react";
import { Link } from "react-scroll";
import "../NavigationComponent/NavigationComponent.css";

const NavigationComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="nav-bar">
      <div>
        <span className="profile-name">Anbuselvan A</span>
      </div>

      <div className="nav-menu">

        <div
          className="indicator"
          style={{ left: `${(hoverIndex !== null ? hoverIndex : activeIndex) * 25}%` }}
        ></div>

        <Link
          className="nav-link"
          to="home"
          smooth={true}
          duration={500}
          offset={-60}
          spy={true}
          onSetActive={() => setActiveIndex(0)}
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          Home
        </Link>

        <Link
          className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          offset={-60}
          spy={true}
          onSetActive={() => setActiveIndex(1)}
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          About Me
        </Link>

        <Link
          className="nav-link"
          to="projects"
          smooth={true}
          duration={500}
          offset={-60}
          spy={true}
          onSetActive={() => setActiveIndex(2)}
          onMouseEnter={() => setHoverIndex(2)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          Projects
        </Link>

        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          spy={true}
          onSetActive={() => setActiveIndex(3)}
          onMouseEnter={() => setHoverIndex(3)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          Contact Me
        </Link>

      </div>
    </div>
  );
};

export default NavigationComponent;

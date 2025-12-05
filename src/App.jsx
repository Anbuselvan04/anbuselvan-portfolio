import "./App.css";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import React from "react";

function App() {
  return ( 
    <React.Fragment>
      <NavigationComponent />

      <section id="home">
        <HomeComponent />
      </section>

      <section id="about">
        <AboutComponent />
      </section>

      <section id="projects">
        <ProjectsComponent />
      </section>

      <section id="contact">
        <ContactComponent />
      </section>

      <FooterComponent/>
    </React.Fragment>
  );
}

export default App;

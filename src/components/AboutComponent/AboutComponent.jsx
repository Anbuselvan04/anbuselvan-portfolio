import React from "react";
import "../AboutComponent/AboutComponent.css";

const AboutComponent = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <p className="about-kicker">ABOUT ME</p>

        <h2 className="about-role">A Passionate Software Engineer</h2>

        <p className="about-subtitle">
          Turning logic into real-world solutions.
        </p>
      </div>

      <div className="about-right">
        <p className="about-desc">
          I’m a passionate and highly driven software engineer with experience in building full-stack applications, backend APIs, and automation workflows.
          I enjoy solving real-world problems and writing clean, efficient, and scalable code.
          My work spans across backend logic, database design, and UI development, giving me a strong end-to-end understanding of the development lifecycle.
          I constantly explore new technologies and improve my workflow to write better, faster, and more maintainable software.
          I love taking up projects that challenge me to grow and push my technical boundaries.
          My goal is to build impactful solutions and contribute meaningfully to teams that value innovation and quality.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-value">&lt; 1</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">5</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">40+</span>
            <span className="stat-label">Leetcode Problems Solved</span>
          </div>
        </div>

        <div className="neon-skills">
          <h3 className="neon-title">Tech Stack</h3>

          <div className="neon-skill-box">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Express.js</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">Postman</div>
            <div className="skill-card">RPA</div>
          </div>
        </div>

        <a href="/Anbuselvan-Resume.pdf" className="resume-btn" download>
          Download Resume
        </a>
      </div>
    </div>

  );
};

export default AboutComponent;

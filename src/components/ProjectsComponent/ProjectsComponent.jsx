import React from "react";
import "../ProjectsComponent/ProjectsComponent.css";

const ProjectsComponent = () => {
  const projects = [
    {
      title: "E-Commerce Backend API",
      desc: "Backend API handling authentication, product management, categories,  orders and reviews for an e-commerce platform.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      live: "https://e-commerce-api-anbuselvan.netlify.app/",
      github: "https://github.com/Anbuselvan04/e-commerce-api",
    },
    {
      title: "Job Management API",
      desc: "REST API that manages job entries with full CRUD functionality and secure authentication.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      live: "#",
      github: "https://github.com/Anbuselvan04/job-management-api-be",
    },
    {
      title: "Task Manager API",
      desc: "Task management backend supporting task creation, updates, status tracking, and JWT authentication.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      live: "#",
      github: "https://github.com/Anbuselvan04/task-manager-api-be",
    },
    {
      title: "Library Management API",
      desc: "Backend for managing library operations including books, users, issuing, returning, and due tracking.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      live: "#",
      github: "https://github.com/Anbuselvan04/library-management-be",
    },
    {
      title: "Library Management Frontend",
      desc: "Frontend UI for library operations integrated with backend APIs, offering a clean user experience.",
      tech: ["React.js","HTML", "CSS", "Axios", "REST API"],
      live: "#",
      github: "https://github.com/Anbuselvan04/library-management-fe",
    },
  ];


  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.live} className="btn-live" target="_blank">Live</a>
              <a href={project.github} className="btn-github" target="_blank">GitHub</a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;

import React from 'react';
import '../assets/style/myproject.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'RNR Tapsilog Street',
    tech: 'HTML',
    description: 'Front-End Developer',
    image: 'src/assets/images/rnr.jpg',
    githubLink: 'https://github.com/alysssi/rnr',
    directoryLink: 'https://rnr.free.nf/?i=1',
  },
  {
    id: 2,
    title: 'Barangay Information System',
    tech: 'JavaScript',
    description: 'Front-End Developer',
    image: 'src/assets/images/brgy.jpg',
    githubLink: 'https://github.com/alysssi/BARANGAY_DJANGO',
    directoryLink: 'https://delanajd.pythonanywhere.com/',
  },
  {
    id: 3,
    title: 'TO-DO LIST',
    tech: 'Python',
    description: 'Weekly Project (Co-Creator)',
    image: 'src/assets/images/todo.jpg',
    githubLink: 'https://github.com/milbertF/project-todolist',
    directoryLink: 'https://todolistapp-falcasantos-villarez.netlify.app/',
  },
  {
    id: 4,
    title: 'Pokemon App',
    tech: 'Node.js',
    description: 'Weekly Project (Co-Creator)',
    image: '/src/assets/images/pokemon.jpg',
    githubLink: '',
    directoryLink: '',
  },
  {
    id: 5,
    title: 'MedEquip Tracker',
    tech: 'PHP',
    description: 'Archiver',
    image: '/src/assets/images/med.jpg',
    githubLink: 'https://github.com/powiepow/WebCraft-main.git',
    directoryLink: '',
  },
  {
    id: 6,
    title: 'Smart Aquaria: Innovative IoT Solutions for Aquarium Monitoring',
    tech: 'Python',
    description: 'IoT Developer',
    image: '/src/assets/images/smart.png',
    githubLink: 'https://github.com/Nordur12/Aquaria',
    directoryLink: '',
  },
];

const MyProjects = () => {
  return (
    <div className="project-section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
              <div className="project-links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.directoryLink && (
                  <a
                    href={project.directoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

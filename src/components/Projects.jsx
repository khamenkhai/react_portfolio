import React from 'react';
import { projectsData } from '../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Works</h2>

      {projectsData.map((project) => (
        <div key={project.id} className="mb-12">
          <h4 className="font-bold text-base lg:text-lg mb-2">
            {project.title} <a href={project.link} className='ml-2'><FaExternalLinkAlt className="inline text-xs ml-1" /></a>
          </h4>
          {project.image && (
            <div className="mb-6">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                style={{ width: '200px' }}
                className={`transition-transform duration-300 ease-in-out hover:scale-105 ${project.noBorder ? '' : 'border border-border rounded-lg shadow-lg'
                  }`}
              />

            </div>
          )}
          <div className="mb-4">
            <p className="text-muted text-base lg:text-lg">
              {project.description}
            </p>
          </div>
          {project.details && (
            <p className="mb-4 text-base lg:text-lg leading-relaxed">
              {project.details}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-mono tag-techstack`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
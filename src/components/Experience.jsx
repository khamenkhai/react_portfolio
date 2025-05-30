import React from 'react';
import { experienceData } from '../data/experience';
import { FaLink } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Experience</h2>

      {experienceData.map((exp) => (
        <div key={exp.id} className="mb-12">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-lg lg:text-xl font-bold">{exp.title}</h3>
              <p className="text-base lg:text-lg">{exp.company}</p>
            </div>
            <p className="text-muted text-sm">{exp.period}</p>
          </div>
          <ul className="list-disc pl-6 mb-4 text-base lg:text-md leading-relaxed">
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {exp.links && (
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-muted hover:text-accent text-sm"
                >
                  <FaLink className="mr-1" /> {link.text}
                </a>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-mono tag-techstack`} >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
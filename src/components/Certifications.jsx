import React from 'react';
import { certificationsData } from '../data/certifications';
import { FaMobileAlt, FaUniversity, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'mobile':
        return <img src="/icons/mobile.png" alt="Mobile Icon" className="w-6 h-6" />;
      case 'cs50':
        return <img src="/images/cs50.png" alt="University Icon" className="w-6 h-6" />;
      case 'meta':
        return <img src="/images/meta.png" alt="Meta Icon" className="w-6 h-6" />;
      default:
        return <img src="/icons/mobile.png" alt="Mobile Icon" className="w-6 h-6" />;
    }
  };


  return (
    <section id="certifications" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="panel-bg rounded-lg shadow-md p-6 border border-border transform transition duration-300 hover:scale-102 hover:shadow-xl"
          >

            <div className="flex items-start mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 `}>
                {getIcon(cert.icon)}
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-muted text-sm">{cert.issuer}</p>
                <p className="text-xs text-muted">Issued: {cert.date}</p>
              </div>
            </div>
            <p className="text-sm lg:text-base leading-relaxed mb-3">
              {cert.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {cert.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-sm font-mono tag-techstack`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={cert.url}
                className="text-accent hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
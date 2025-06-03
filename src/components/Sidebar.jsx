import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { socialLinks } from '../data/socialLinks';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaDiscord } from 'react-icons/fa';

const Sidebar = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <FaGithub className="text-xl" />;
      case 'linkedin':
        return <FaLinkedin className="text-xl" />;
      case 'envelope':
        return <FaEnvelope className="text-xl" />;
      case 'phone':
        return <FaPhoneAlt className="text-xl" />;
      case 'discord':
        return <FaDiscord className="text-xl" />;
      default:
        return <FaGithub className="text-xl" />;
    }
  };

  return (
    <div className="lg:w-1/2 xl:w-2/5 lg:pr-8 xl:pr-16 2xl:pr-20 mb-0 lg:mb-0">
      <div className="lg:sticky lg:top-24 sticky-safari">
        <div style={{ height: '100px' }}></div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">Kham En Khai</h1>
        <h2 className="text-xl lg:text-2xl mb-2">Mobile App Developer</h2>
        <p className="text-base lg:text-lg mb-6">Flutter & JS Enthusiast</p>

        <a href="#"
          className="inline-flex items-center px-5 py-2 panel-bg rounded-full shadow-md hover:shadow-lg border border-border text-sm"
        >
          <FaFilePdf className="mr-2" /> Resume
        </a>

        <div className="flex justify-start space-x-6 mt-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-muted hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
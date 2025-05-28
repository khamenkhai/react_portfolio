import React from 'react';
import { contactData } from '../data/contact';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return <FaLinkedin className="text-2xl mb-2 text-muted group-hover:text-accent" />;
      case 'envelope':
        return <FaEnvelope className="text-2xl mb-2 text-muted group-hover:text-accent" />;
      case 'phone':
        return <FaPhoneAlt className="text-2xl mb-2 text-muted group-hover:text-accent" />;
      default:
        return <FaLinkedin className="text-2xl mb-2 text-muted group-hover:text-accent" />;
    }
  };

  return (
    <section id="contact" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">{contactData.title}</h2>

      <div className="panel-bg rounded-lg shadow-md p-8 border border-border text-center">
        <h3 className="text-lg lg:text-xl font-bold mb-4">{contactData.subtitle}</h3>
        <p className="text-base lg:text-lg text-muted mb-8 max-w-2xl mx-auto">
          {contactData.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {contactData.items.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 editor-bg rounded-lg border border-border hover:border-accent hover-effect group"
            >
              {getIcon(item.icon)}
              <span className="font-medium text-sm">{item.name}</span>
              <span className="text-xs text-muted">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
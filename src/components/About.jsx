import React from 'react';
import { aboutData } from '../data/about';

const About = () => {
  return (
    <section id="about" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">{aboutData.title}</h2>
      <div className="space-y-4">
        <p className="text-base lg:text-md leading-relaxed whitespace-pre-line">
          {aboutData.description}
        </p>
      </div>
    </section>
  );
};

export default About;
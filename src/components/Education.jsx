import React from 'react';

const Education = () => {
  return (
    <section id="education" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Education</h2>

      {/* Education Item 1 */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-lg lg:text-xl font-bold">University Of Technology</h3>
            <p className="text-base lg:text-lg">Yadanapon Cybercity (First year)</p>
          </div>
          <p className="text-muted text-sm">2019 - 2020</p>
        </div>
        <p>Studied Computer Science with a focus on software development fundamentals and programming principles.</p>

        <div className="flex flex-wrap gap-2 mt-5">

          <span className={`px-3 py-1 rounded-full text-sm font-mono tag-techstack`}>
            Computer Science
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-mono tag-techstack`}>
            Programming
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-mono tag-techstack`}>
            Software Development
          </span>

        </div>
      </div>

      {/* Education Item 2
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-lg lg:text-xl font-bold">Flutter Development Bootcamp</h3>
            <p className="text-base lg:text-lg">Online Certification Program</p>
          </div>
          <p className="text-muted text-sm">2021</p>
        </div>
        <ul className="list-disc pl-6 mb-4 text-base lg:text-md leading-relaxed">
          <li>Completed intensive 3-month Flutter development program</li>
          <li>Built 5 complete Flutter applications as part of curriculum</li>
          <li>Learned state management, API integration, and Firebase implementation</li>
        </ul>
      </div> */}
    </section>
  );
};

export default Education;
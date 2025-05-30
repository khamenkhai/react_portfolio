import React from 'react';
import { skillsData } from '../data/skills';
import { 
  FaFire, 
  FaBitbucket, 
  FaJira, 
  FaGithub, 
  FaDatabase,
  FaAndroid
} from 'react-icons/fa';

const Skills = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'fire':
        return <FaFire className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      case 'bitbucket':
        return <FaBitbucket className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      case 'jira':
        return <FaJira className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      case 'github':
        return <FaGithub className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      case 'database':
        return <FaDatabase className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      case 'android':
        return <FaAndroid className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
      default:
        return <FaFire className="text-2xl mb-2 text-accent group-hover:text-white transition-colors duration-300" />;
    }
  };

  return (
    <section id="skills" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8 hover:text-accent transition-colors duration-300">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Languages */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
          <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-accent transition-colors duration-300">Languages</h3>
          <div className="space-y-4">
            {skillsData.languages.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1 group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm group-hover:text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 group-hover:bg-border/80 transition-colors duration-300">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar group-hover:bg-gradient-to-r from-accent to-accent/80 transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
          <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-accent transition-colors duration-300">Frameworks & Libraries</h3>
          <div className="space-y-4">
            {skillsData.frameworks.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1 group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm group-hover:text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 group-hover:bg-border/80 transition-colors duration-300">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar group-hover:bg-gradient-to-r from-accent to-accent/80 transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
          <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-accent transition-colors duration-300">Databases</h3>
          <div className="space-y-4">
            {skillsData.databases.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1 group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm group-hover:text-white">
                    {skill.level > 0 ? `${skill.level}%` : 'N/A'}
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2 group-hover:bg-border/80 transition-colors duration-300">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar group-hover:bg-gradient-to-r from-accent to-accent/80 transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
          <h3 className="text-lg lg:text-xl font-bold mb-6 hover:text-accent transition-colors duration-300">Tools & Platforms</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.tools.map((tool, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-4 editor-bg rounded-lg border border-border hover:bg-accent hover:border-accent/50 hover:scale-105 transition-all duration-300"
              >
                {getIcon(tool.icon)}
                <span className="text-sm font-medium text-center group-hover:text-white transition-colors duration-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
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
        return <FaFire className="text-2xl mb-2 text-accent" />;
      case 'bitbucket':
        return <FaBitbucket className="text-2xl mb-2 text-accent" />;
      case 'jira':
        return <FaJira className="text-2xl mb-2 text-accent" />;
      case 'github':
        return <FaGithub className="text-2xl mb-2 text-accent" />;
      case 'database':
        return <FaDatabase className="text-2xl mb-2 text-accent" />;
      case 'android':
        return <FaAndroid className="text-2xl mb-2 text-accent" />;
      default:
        return <FaFire className="text-2xl mb-2 text-accent" />;
    }
  };

  return (
    <section id="skills" className="mb-16 xl:mb-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Languages */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg lg:text-xl font-bold mb-6">Languages</h3>
          <div className="space-y-4">
            {skillsData.languages.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg lg:text-xl font-bold mb-6">Frameworks & Libraries</h3>
          <div className="space-y-4">
            {skillsData.frameworks.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg lg:text-xl font-bold mb-6">Databases</h3>
          <div className="space-y-4">
            {skillsData.databases.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-base">{skill.name}</span>
                  <span className="text-muted text-sm">
                    {skill.level > 0 ? `${skill.level}%` : 'N/A'}
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full skill-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="panel-bg rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg lg:text-xl font-bold mb-6">Tools & Platforms</h3>
          <div className="grid grid-cols-2 gap-4">
            {skillsData.tools.map((tool, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 editor-bg rounded-lg border border-border"
              >
                {getIcon(tool.icon)}
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
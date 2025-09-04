import React from 'react';
import SkillCard from '../cards/SkillCard';

const Skills = () => {
  const data = [

    {
      title: "Web Development",
      name: "heart",
      skills: ["HTML", "CSS", "JavaScript", "React Js", "Tailwind CSS", "BootStrap", "PHP"]
    },
    {
      title: "Programming & Databases",
      name: "heart",
      skills: ["Python", "Java", "C", "SQL", "MONGODB"]
    },

    {
      title: "Soft Skills",
      name: "heart",
      skills: ["Communication","Problem Solving","Quick Learner","Time Management","Work Ethic"]
    },

    {
      title: "Tools & platforms",
      name: "heart",
      skills: ["Git", "Github", "Netlify", "Google Colab", "Render", "VS Code"]
    }
  ];

  return (
    <div id="skills" className="py-12 px-4 md:px-12 lg:px-20">
      <h1 className="text-center font-bold text-3xl text-black dark:text-white">My Skills</h1>
      <p className="mt-2 text-center text-gray-500 dark:text-gray-300 text-base">
        Here are my skills across various domains.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((d, i) => (
          <SkillCard key={i} title={d.title} name={d.name} skills={d.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: 'Certifications',
    description: 'Professional certifications and credentials',
    icon: <GraduationCap size={28} className="text-pink-500" />,
    link: '/certifications',
  },
  {
    title: 'Internships',
    description: 'Professional work experience and internships',
    icon: <Briefcase size={28} className="text-pink-500" />,
    link: '/internships',
  },
  {
    title: 'Bootcamps & Hackathons',
    description: 'Intensive learning programs and coding competitions',
    icon: <Code size={28} className="text-pink-500" />,
    link: '/bootcamps-hackathons',
  },
  {
    title: 'Achievements',
    description: 'Awards, recognitions and notable accomplishments',
    icon: <Award size={28} className="text-pink-500" />,
    link: '/achievements',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 px-4 bg-white dark:bg-gray-900 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        My Professional Experience
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
        Explore my journey through various certifications, internships, bootcamps, hackathons, and achievements that have shaped my professional career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-5 hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="mb-2 bg-pink-100 dark:bg-pink-900 p-3 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 mb-4">
                {item.description}
              </p>
              <Link to={item.link}>
                <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
                  View All →
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

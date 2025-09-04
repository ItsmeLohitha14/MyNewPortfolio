import React from 'react';

const educationData = [
  {
    year: "2022–2026",
    title: "B.Tech (Artificial Intelligence & Machine Learning)",
    institution: "QIS College of Engineering and Technology",
    cgpa: "9.3",
  },
  {
    year: "2020–2022",
    title: "Intermediate (MPC)",
    institution: "Sri Saraswathi Junior College",
    cgpa: "9.7",
  },
  {
    year: "2019–2020",
    title: "Secondary School (SSC)",
    institution: "Nirmala High School",
    cgpa: "10.0",
  },
];

export default function Education() {
  return (
    <div className="lg:py-1">
      <h2 className="text-[40px] font-bold text-pink-600 dark:text-pink-400 mb-8">Education</h2>
      <div className="relative border-l-4 border-pink-300 dark:border-pink-500 pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-9 top-5 w-6 h-6 bg-pink-600 dark:bg-pink-400 rounded-full border-4 border-white shadow-md"></div>
            <div className="p-5 rounded-xl shadow-md dark:shadow-pink-900 relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <p className="text-pink-600 dark:text-pink-400 font-semibold">{edu.year}</p>
                <h3 className="text-lg font-bold dark:text-white">{edu.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              </div>
              <div className="text-sm font-semibold text-pink-600 dark:text-pink-400 animate-pulse drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] sm:text-right">
                CGPA: {edu.cgpa}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

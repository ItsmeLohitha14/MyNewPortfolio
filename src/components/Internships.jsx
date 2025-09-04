import React from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    MapPin,
    Calendar,
    ArrowUpRight,
} from "lucide-react";

const internships = [
    {
        role: "AI-ML Virtual Intern",
        company: "AICTE EduSkills by Google For Developers",
        location: "Remote",
        duration: "Apr – Jun 2025",
        description:
            "Worked on AI/ML concepts including supervised and unsupervised learning. Built basic models using TensorFlow and participated in case study-based projects.",
        achievements: [
            "Improved model accuracy by 15%",
            "Completed 3 case studies on real-world datasets",
        ],
        certificateLink: "/internshipcertificates/Google AI-ML.pdf",
    },
    {
        role: "Cloud Virtual Intern",
        company: "AICTE EduSkills by Amazon Web Services (AWS)",
        location: "Remote",
        duration: "Jan – Mar 2025",
        description:
            "Completed cloud fundamentals training. Gained exposure to AWS services like EC2, S3, and Lambda. Deployed and managed simple cloud-based applications.",
        achievements: [
            "Deployed 5 cloud apps using EC2 & S3",
            "Improved deployment efficiency by 30%",
        ],
        certificateLink: "/internshipcertificates/Aws Cloud Virtual Internship.pdf",
    },
    {
        role: "Zero Trust Cloud Security Intern",
        company: "AICTE EduSkills by Zscaler",
        location: "Remote",
        duration: "Jul – Sep 2024",
        description:
            "Explored Zero Trust architecture and cloud security principles. Understood access controls, secure communication, and identity protection in cloud environments.",
        achievements: [
            "Presented on Zero Trust best practices",
            "Completed 4 security case studies",
        ],
        certificateLink:
            "/internshipcertificates/Zscalar.pdf",
    },
    // Add more internships here...
    {
        role: "Web Developer Intern",
        company: "InnoByte Services",
        location: "Remote",
        duration: "Jun – Jul 2024",
        description:
            "Collaborated on full-stack web applications. Worked on HTML, CSS, and JavaScript for the frontend part.",
        achievements: [
            "Improved dashboard performance by 40%",
            "Implemented 15+ reusable components",
        ],
        certificateLink: "https://example.com/innobyte-certificate",
    },
    {
        role: "Machine Learning Intern",
        company: "Coding Raja Technologies",
        location: "Remote",
        duration: "May – Jul 2024",
        description:
            "Implemented machine learning models using Python and Scikit-learn. Gained experience in data preprocessing, model evaluation, and exploratory data analysis.",
        achievements: [
            "Built 3 predictive ML models",
            "Increased training efficiency by 25%",
        ],
        certificateLink:
            "/internshipcertificates/Coding Raja Technologies.pdf",
    },
    {
        role: "Web Developer Intern",
        company: "Bharat Intern",
        location: "Remote",
        duration: "May – Jun 2024",
        description:
            "Created dynamic websites using ReactJS and Tailwind CSS. Designed Portfolio, Weather, and Netflix Homepage clones.",
        achievements: [
            "Designed 3 live websites",
            "Enhanced UI/UX consistency across pages",
        ],
        certificateLink: "https://example.com/bharatintern-certificate",
    },
    {
        role: "Python Developer Intern",
        company: "Oasis Infobyte",
        location: "Remote",
        duration: "May – Jun 2024",
        description:
            "Developed Python-based solutions like Voice Assistant, BMI Calculator, Chat Bot, Weather App, and Password Generator.",
        achievements: [
            "Completed 5 Python projects with GUI",
            "Focused on file handling and modular code",
        ],
        certificateLink: "https://example.com/oasis-certificate",
    },
    {
        role: "Web Developer Intern",
        company: "CodSoft",
        location: "Remote",
        duration: "Apr – May 2024",
        description:
            "Worked on front-end web development projects using HTML, CSS, and JavaScript. Built responsive layouts and enhanced UI/UX for client-based applications.",
        achievements: [
            "Built 4 responsive landing pages",
            "Optimized UI for mobile devices",
        ],
        certificateLink: "https://example.com/codsoft-certificate",
    },
];

const Internships = () => {
    return (
        <div className="p-4 md:p-8">
            

            {/* Header Row: Back Button + Title */}
<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
  {/* Back Button */}
  <a href="/#experience" className="md:order-1">
    <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full shadow-sm transition flex items-center gap-1">
      ← Back
    </button>
  </a>

  {/* Title & Subtitle */}
  <div className="flex-1 text-center md:order-2">
    <h2 className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
      <Briefcase className="text-pink-500" size={28} />
      Internships
    </h2>
    <p className="text-gray-600 dark:text-gray-300 text-lg mt-1">
      Professional work experience and internships
    </p>
  </div>

  {/* Spacer to balance layout */}
  <div className="hidden md:block w-[84px] md:order-3" />
</div>




            {/* Internship Cards */}
            <div className="grid gap-8">
                {internships.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition p-6"
                    >
                        {/* Verify Button Top Right */}
                        <a
                            href={item.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4"
                        >
                            <button
                                className="bg-pink-500 hover:bg-pink-600 active:scale-95 text-white px-2 py-[1px] sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1 transition-transform duration-200"
                            >
                                Verify <ArrowUpRight size={11} className="sm:size-[14px]" />
                            </button>
                        </a>



                        {/* Icon + Role */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-pink-600">
                                    {item.role}
                                </h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.company}
                                </p>
                            </div>
                        </div>

                        {/* Meta Info Pills */}
                        <div className="flex flex-wrap gap-3 mt-2 mb-4">
                            <span className="flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                                <MapPin size={16} className="stroke-[2]" />
                                {item.location}
                            </span>
                            <span className="flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                                <Calendar size={16} className="stroke-[2]" />
                                {item.duration}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-200">
                            {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="mt-4">
                            <h4 className="font-medium mb-1 text-sm text-gray-900 dark:text-white">
                                Key Achievements
                            </h4>
                            <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                                {item.achievements.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Internships;

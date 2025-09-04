import React from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Calendar } from "lucide-react";

const certifications = [

    {
        date: "Jun 2025",
        title: "SQL Basic",
        platform: "Hackerrank",
        image: "/certificates/SQL hackerrank.png",
        pdf: "/certificates/sql_basic certificate.pdf",
    },
    {
        date: "Dec 2024",
        title: "Cloud Architecting",
        platform: "AWS",
        image: "/certificates/Aws Cloud Architecting.png",
        pdf: "/certificates/AWS_Cloud_Architecting Certificate.pdf",
    },
    {
        date: "Dec 2024",
        title: "Cloud Foundations",
        platform: "AWS",
        image: "/certificates/AWS Cloud Foundations.png",
        pdf: "/certificates/AWS_Cloud_Foundations Certificate.pdf",
    },


    {
        date: "Apr 2024",
        title: "Machine Learning with Python",
        platform: "IBM",
        image: "/certificates/ML with Python ibm.jpg",
        pdf: "/certificates/ml with Python ibm.pdf",
    },
    {
        date: "Sep 2024",
        title: "Fundamentals of Cyber Security",
        platform: "Zscaler",
        image: "/certificates/Zscalar certificate.jpg",
        pdf: "/certificates/Zscalar Cybersecurity.pdf",
    },
    {
        date: "Oct 2024",
        title: "Generative AI",
        platform: "HCL GUVI",
        image: "/certificates/Guvi HCL Generative AI.png",
        pdf: "https://www.guvi.in/verify-certificate?id=Yx3F7117C824va75H7",
    },
    {
        date: "May 2024",
        title: "Python Essentials 1",
        platform: "Cisco Networking Academy",
        image: "/certificates/PythonEssentials1.jpg",
        pdf: "/certificates/PythonEssentials1 by Cisco.pdf",
    },
];

const Certification = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-zinc-900 dark:to-zinc-950 p-6 md:p-10 text-black dark:text-white">

            {/* Header Row */}
<div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
  {/* Back Button */}
  <a href="/#experience" className="md:self-start">
    <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full shadow transition flex items-center gap-1">
      ← Back
    </button>
  </a>

  {/* Heading */}
  <div className="text-center flex-1">
    <h2 className="text-4xl font-bold text-pink-600 flex items-center justify-center gap-2">
      <BadgeCheck className="text-pink-500" size={32} />
      Certifications
    </h2>
    <p className="text-gray-600 dark:text-gray-300 text-lg mt-1 max-w-2xl mx-auto">
      Professional certifications and credentials that validate my technical expertise
    </p>
  </div>

  {/* Spacer to balance layout */}
  <div className="hidden md:block w-[84px]" />
</div>




            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 dark:border-zinc-700 overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        {cert.image && (
                            cert.pdf ? (
                                <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-36 w-full object-cover border-b border-gray-200 dark:border-zinc-700"
                                    />
                                </a>
                            ) : (
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="h-36 w-full object-cover border-b border-gray-200 dark:border-zinc-700"
                                />
                            )
                        )}

                        {/* Details */}
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div className="flex items-center text-sm text-pink-600 font-medium mb-2">
                                <Calendar size={16} className="mr-2" />
                                {cert.date}
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-pink-500 font-medium">{cert.platform}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Certification;

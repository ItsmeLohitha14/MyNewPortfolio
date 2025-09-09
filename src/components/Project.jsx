import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from '/src/assets/ThreadLink.png';
import project2 from '/src/assets/Campusprep.png';
import project3 from '/src/assets/LearnersAcademy.png';
import project4 from '/src/assets/Guest House.png';
import project5 from '/src/assets/Food Delivery.png';
import project6 from '/src/assets/Netflix Clone.png';
import project7 from '/src/assets/TexttoVoice.png';
import project8 from '/src/assets/Meesho Clone.png';


const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allProjects = [
    {
      id: 1,
      type: "Web",
      title: "Thread Link",
      image: project1,
      description: "A platform linking orphanages with surplus clothes to support sustainable donations...",
      link1: "https://github.com/ItsmeLohitha14/Thread-Link-Project",
      link2: "https://github.com/ItsmeLohitha14/Thread-Link-Project"
    },
    {
      id: 2,
      type: "Web",
      title: "Campus Prep",
      image: project2,
      description: "A Centralized system to manage campus placements and prep resources...",
      link1: "https://github.com/ItsmeLohitha14/Campus-Prepp-Project",
      link2: "https://github.com/ItsmeLohitha14/Campus-Prepp-Project"
    },
    {
      id: 3,
      type: "Web",
      title: "Learners Academy",
      image: project3,
      description: "A responsive platform for student learning, course enrollment, and progress tracking...",
      link1: "https://github.com/sandy4314/snakegame/",
      link2: "https://sandy4314.github.io/snakegame/"
    },
    {
      id: 4,
      type: "Web",
      title: "King Sukh GuestHouse",
      image: project4,
      description: "A smart booking system for hassle-free and comfortable stays...",
      link1: "https://github.com/ItsmeLohitha14/InnoByte-Services-Kingsukh-Guest-House-Website",
      link2: "https://itsmelohitha14.github.io/InnoByte-Services-Kingsukh-Guest-House-Website/"
    },
    {
      id: 5,
      type: "Web",
      title: "KindBite FoodShare",
      image: project5,
      description: "A smart donation system for feeding the hungry and spreading kindness...",
      link1: "https://github.com/ItsmeLohitha14/Food-Delivery-Website",
      link2: "https://github.com/ItsmeLohitha14/Food-Delivery-Website"
    },
    {
      id: 6,
      type: "Web",
      title: "Netflix Clone",
      image: project6,
      description: "A responsive UI for seamless video browsing and streaming experience...",
      link1: "https://github.com/ItsmeLohitha14/Bharat-intern-Web-Dev-Internship-Task-3-Netflix-",
      link2: "https://itsmelohitha14.github.io/Bharat-intern-Web-Dev-Internship-Task-3-Netflix-/"
    },

    {
      id: 7,
      type: "Web",
      title: "Text to Speech Converter",
      image: project7,
      description: "A smart text-to-speech system for clear, natural, and accessible voice experiences…",
      link1: "https://github.com/ItsmeLohitha14/Text-to-Voice-Converter",
      link2: "https://itsmelohitha14.github.io/Text-to-Voice-Converter/"
    },

    {
      id: 8,
      type: "Web",
      title: "Meesho Clone",
      image: project8,
      description: "A stylish eCommerce UI for smooth product browsing and shopping experience...",
      link1: "https://github.com/ItsmeLohitha14/Meesho-Website",
      link2: "https://itsmelohitha14.github.io/Meesho-Website/"
    }
  ];

  const filterOptions = ["All", "Web", "ML"];
  const filteredProjects =
    selectedType === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === selectedType);

  const itemsPerView = screenWidth < 640 ? 1 : 3;
  const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + itemsPerView);

  const handleNext = () => {
    if (currentIndex + itemsPerView < filteredProjects.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="p-6 sm:p-8 mt-20 md:mt-36 bg-white dark:bg-gray-900 text-black dark:text-white relative" id="projects">
      <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Explore my portfolio of projects spanning different technologies and domains.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              setSelectedType(option);
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              selectedType === option
                ? 'bg-pink-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="relative">
        <div className="flex items-center justify-center overflow-x-auto sm:overflow-hidden">
          <div className="flex gap-4 sm:gap-6 px-1 sm:px-0 transition-all duration-300">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md w-[85vw] max-w-xs sm:w-80 flex-shrink-0"
                data-aos="fade-up"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-xl w-full h-40 sm:h-44 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 text-xs rounded">
                    {project.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>

                  <div className="flex flex-row justify-center gap-3">
                    <a href={project.link1} target="_blank" rel="noopener noreferrer">
                      <button className='bg-pink-600 px-5 py-2 rounded-xl text-white font-semibold hover:bg-pink-500 w-full sm:w-auto'>
                        Repo
                      </button>
                    </a>
                    <a href={project.link2} target="_blank" rel="noopener noreferrer">
                      <button className='bg-pink-600 px-5 py-2 rounded-xl text-white font-semibold hover:bg-pink-500 w-full sm:w-auto'>
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="absolute -bottom-10 left-0 right-0 flex sm:hidden justify-center gap-10 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow-md"
          >
            <FaArrowLeft className="text-xs text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerView >= filteredProjects.length}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow-md"
          >
            <FaArrowRight className="text-xs text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Desktop Arrows */}
      <div className="hidden sm:flex justify-center gap-5 p-5 sm:mt-6">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <FaArrowLeft className="text-xl sm:text-3xl text-gray-600 dark:text-gray-300 hover:text-pink-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-2" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerView >= filteredProjects.length}
        >
          <FaArrowRight className="text-xl sm:text-3xl text-gray-600 dark:text-gray-300 hover:text-pink-600 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-2" />
        </button>
      </div>
    </div>
  );
};

export default Project;

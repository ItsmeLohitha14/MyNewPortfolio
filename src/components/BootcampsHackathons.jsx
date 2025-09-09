import React, { useState } from "react";
import { Calendar } from "lucide-react";

const hackathons = [
  {
    id: 1,
    date: "Dec 2023",
    title: "Udvikash",
    organizer: "Uncalled Innovators",
    location: "RVR & JC College of Engineering, AP",
    description:
      "Participated in Hackathon Udvikash organized by Uncalled Innovators. Our team collaborated to build an innovative solution focused on food delivery for needy people as well as for friends and family. The project emphasized problem-solving, teamwork, and creativity in addressing real-world challenges. We developed the platform using HTML, CSS, JavaScript, and incorporated Bootstrap for responsive styling along with engaging animations to enhance user experience. This experience helped me strengthen my front-end development skills, teamwork, and time management while working in a competitive hackathon environment.",
  },
  {
    id: 2,
    date: "April 2025",
    title: "Hack Forge 1.0",
    organizer: "Cloud Forge",
    location: "Online Hackathon",
    description:
      "Took part in Hack Forge 1.0, a 24-hour online hackathon organized by Cloud Forge. Our team developed and presented a project idea under tight deadlines and showcased it virtually. We built CityFix, a web-based solution designed to address and report issues within a particular street or area, enabling communities to raise concerns and get them resolved efficiently. We leveraged MERN Stack to handle backend and deployment, while focusing on building a scalable and user-friendly interface. The hackathon strengthened our ability to ideate quickly, manage tasks under pressure, collaborate effectively in a virtual setup, and pitch solutions clearly to judges.",
  },
];

const BootcampsHackathons = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleDescription = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-2">
        Bootcamps & Hackathons
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Events and hackathons I have participated in to strengthen my skills and teamwork
      </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hack) => (
          <div
            key={hack.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            {/* Date */}
            <div className="flex items-center gap-2 text-pink-500 px-4 pt-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{hack.date}</span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {hack.title}
              </h3>
              <p className="text-pink-600 text-sm">{hack.organizer}</p>
              <p className="text-gray-500 text-xs">{hack.location}</p>

              {/* Read More Button */}
              <button
                onClick={() => toggleDescription(hack.id)}
                className="mt-3 text-sm text-pink-600 hover:underline"
              >
                {openCard === hack.id ? "Hide Details" : "Read More"}
              </button>

              {/* Expandable Description */}
              {openCard === hack.id && (
                <p className="mt-2 text-gray-600 text-sm">{hack.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampsHackathons;

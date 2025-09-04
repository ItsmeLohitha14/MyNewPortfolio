import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 mt-4 px-4 md:px-8 lg:px-16"
    >
      <h2 className="text-pink-600 dark:text-pink-400 font-bold text-3xl mb-6">
        My Journey
      </h2>
      <div className="text-[17px] leading-7 text-gray-600 dark:text-gray-300 flex flex-col gap-4">
        <p>
          Hello! I'm Lohitha, an aspiring Full Stack Web developer pursuing my Final B.Tech in Artificial Intelligence and Machine Learning.
        </p>
        <p>
          My passion lies in exploring the fascinating intersection of technology and intelligence. I enjoy solving complex problems through code and creating applications that enhance user experiences.
        </p>
        <p>
          Outside of academics, I'm an enthusiastic learner who loves to participate in hackathons, coding challenges, and community tech events. I believe in continuous learning and constantly expanding my skill set.
        </p>
        <p>
          My goal is to leverage AI technologies to develop innovative solutions that address real-world challenges while making a positive impact on society.
        </p>
      </div>
    </section>
  );
};

export default About;

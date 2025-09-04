import React, { useEffect } from 'react';
import myimage from '/src/assets/lohi.png';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleConnectClick = () => {
    const email = 'chittemlohitha@gmail.com';
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent("Hello Lohitha,\n\nI would like to connect with you.");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  const handleResumeClick = () => {
    window.open('/ChittemVenkataLohitha-Resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20 w-full max-w-7xl z-10">

        {/* Left Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-xl text-gray-500 dark:text-gray-400 font-medium">
            Turning ideas into impact I'm
          </h2>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(79,70,190,0.4)] dark:drop-shadow-[0_0_8px_rgba(199,210,254,0.5)]">
            Lohitha
          </h1>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            Full Stack Web Developer <br />
            <span className="text-pink-600 dark:text-pink-400">AI & ML Enthusiast</span>
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building responsive, scalable web applications that make a real difference.
            With clean code, creativity, and a passion for blending Full Stack development with AI/ML,
            I deliver smart, impactful solutions.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 italic">
            <span className="text-lg">🚀</span> Open to exciting opportunities and collaborations!
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <Button
              onClick={handleResumeClick}
              className="bg-pink-600 text-white hover:bg-pink-700 transition-all px-6 py-2 rounded-full font-semibold shadow-md"
            >
              VIEW RESUME
            </Button>
            <Button
              onClick={handleConnectClick}
              className="bg-transparent text-pink-600 dark:text-pink-400 border border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950 hover:text-pink-700 dark:hover:text-white px-6 py-2 rounded-full font-semibold transition-all"
            >
              LET'S CONNECT
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-[6px] border-pink-400 shadow-2xl overflow-hidden">
            <img
              src={myimage}
              alt="Lohitha Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

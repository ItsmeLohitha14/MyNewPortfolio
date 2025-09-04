import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  const form = useRef();

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dp9qqkl', 'template_pfo8wem', form.current, {
        publicKey: 'tsJH6nRKt4jPiE9py',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          setformdata({ name: "", email: "", message: "" });
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="p-6 md:p-10 mt-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="contact">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-1">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Have a question? Feel free to reach out.</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 shadow-lg rounded-lg p-6 md:p-8 bg-white dark:bg-gray-800">
          <form ref={form} onSubmit={handlesubmit} className="space-y-3">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handlechange}
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handlechange}
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handlechange}
                rows={4}
                required
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-5 py-2 text-sm rounded hover:bg-pink-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 shadow-lg rounded-lg p-6 md:p-10 bg-white dark:bg-gray-800 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-pink-600 mb-4">Contact Information</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="mb-4">
              <div className='flex gap-2'>
                <i className="fas fa-envelope text-2xl text-transparent bg-pink-600 bg-clip-text"></i>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Email</p>
              </div>
              <p className="text-pink-400">chittemlohitha@gmail.com</p>
            </div>

            <div className="mb-4">
              <div className='flex gap-2'>
                <i className="fab fa-github text-2xl text-pink-600"></i>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">GitHub</p>
              </div>
              <p className="text-pink-400">@ItsmeLohitha14</p>
            </div>

            <div className="mb-4">
              <div className='flex gap-2'>
                <i className="fab fa-linkedin text-2xl text-pink-600"></i>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">LinkedIn</p>
              </div>
              <p className="text-pink-400">Chittem Venkata Lohitha</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Connect with me</h2>
            <div className="flex space-x-4 text-pink-600">
              <a href="https://github.com/ItsmeLohitha14" target="_blank" rel="noreferrer">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/chittem-venkata-lohitha-a98a67279/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="mailto:itsmelohitha14@gmail.com">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

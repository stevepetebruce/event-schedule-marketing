import React from 'react';

function Hero() {

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-100" data-aos="zoom-y-out">Simple schedules for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-800">festivals</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Schedule tools for event organisers and attendees</p>
            </div>
          </div>
          <div className="relative flex justify-center mb-4" data-aos="zoom-y-out" data-aos-delay="450">
            <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group pl-4 pb-4 pt-4 pr-6 shadow-lg transition duration-200 ease-in-out hover:scale-105" onClick={(e) => (window.location = 'https://www.app.scheduled.live/auth')}>
              <svg className="w-6 h-6 fill-current text-gray-400 transition duration-200 ease-in-out group-hover:text-indigo-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                <path d="M10 17l6-5-6-5z" />
              </svg>
              <span className="ml-3 uppercase">Create your schedule</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">animation</div>
    </section>
  );
}

export default Hero;
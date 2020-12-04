import React from 'react'

function index() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-100">Examples of what you can create</h2>
            <p className="text-xl text-gray-400">Explore the different views to promote your event and inform your customers.</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-14 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos="zoom-y-out" data-aos-delay="150">
            <a className="relative flex flex-col items-center p-5 bg-gray-700 rounded-xl shadow-xl transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-600"
            href="http://www.google.com"
            target="_blank"
            >
              <img className="rounded-xl transform animate-float mb-3" src='/svg/schedule-screen3.svg'  alt="schedule" />
              <h4 className="text-xl font-bold leading-snug tracking-tight text-white mb-1">Event schedule</h4>
              <p className="text-gray-300 text-center mx-8">Schedules to link to or add to your website.</p>
            </a>
            <a className="relative flex flex-col items-center p-5 bg-gray-700 rounded-xl shadow-xl transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-600"
            href="http://www.google.com"
            target="_blank">
              <img className="rounded-xl transform animate-float mb-3" src='/svg/monitor-screen.svg' alt="schedule" />
              <h4 className="text-xl font-bold leading-snug tracking-tight text-white mb-1">Monitor display</h4>
              <p className="text-gray-300 text-center mx-8">Keep your attendees informed at the venue.</p>
            </a>
            <div className="relative flex flex-col items-center p-5 bg-gray-700 rounded-xl shadow-xl">
              <img className="rounded-xl transform animate-float mb-3" src='/svg/artist-screen2.svg' alt="schedule" />
              <h4 className="text-xl font-bold leading-snug tracking-tight text-white mb-1">Artist / speaker list</h4>
              <p className="text-gray-300 text-center mx-8"><span class="inline-block align-middle rounded-full mb-1 py-1 px-3 text-xs text-white bg-pink-600">Coming Soon</span> <br/>Artist biographies in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index

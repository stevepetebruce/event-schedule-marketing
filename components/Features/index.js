import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition.js';

function Features() {

  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line
  }, [tab])

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-gray-100">Solutions for event organisers</h1>
            <p className="text-xl text-gray-400">Enter the details of your event and instantly get three displays for your team and attendees.</p>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h4 className="h4 mb-3 text-gray-50">3 displays in 1 product</h4>
              </div>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-200 ease-in-out mb-3 transform hover:scale-105 ${tab !== 1 ? 'bg-gray-700 shadow-md border-gray-800 hover:shadow-lg' : 'bg-indigo-600 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-white">Event schedule</div>
                    <div className="text-gray-300">Display the schedule for your whole event including multiple days and locations.</div>
                  </div>
                  <div className={`flex justify-center items-center w-8 h-8 ${tab !== 2 ? 'bg-gray-200' : 'bg-indigo-100'} rounded-full shadow flex-shrink-0 ml-3`}>
                    <svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <path d="M-2-2h24v24H-2z"/>
                        <path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM9.78 5h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 00-.25-.99l-3.87-2.3V5.72c0-.4-.32-.72-.72-.72z" fill="#1D1D1D"/>
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-200 ease-in-out mb-3 transform hover:scale-105 ${tab !== 2 ? 'bg-gray-700 shadow-md border-gray-800 hover:shadow-lg' : 'bg-indigo-600 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-white">Monitor display</div>
                    <div className="text-gray-300">Display who is live and who is appearing next on monitors at the venue.</div>
                  </div>
                  <div className={`flex justify-center items-center w-8 h-8 ${tab !== 2 ? 'bg-gray-200' : 'bg-indigo-100'} rounded-full shadow flex-shrink-0 ml-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-200 ease-in-out mb-3 transform hover:scale-105 ${tab !== 3 ? 'bg-gray-700 shadow-md border-gray-800 hover:shadow-lg' : 'bg-indigo-600 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-white">Artist / speaker list <span className="inline-block align-middle rounded-full ml-3 mb-1 py-1 px-3 text-xs text-white bg-pink-600">Coming Soon</span></div>
                    <div className="text-gray-300">Display all the artists attending the event and view each one's details, times and links.</div>
                  </div>
                  <div className={`flex justify-center items-center w-8 h-8 ${tab !== 2 ? 'bg-gray-200' : 'bg-indigo-100'} rounded-full shadow flex-shrink-0 ml-3`}>
                    <svg width="20" height="20" viewBox="0 0 32 34" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 16a7 7 0 10-7-7 7 7 0 007 7zm0-12a5 5 0 11-5 5 5 5 0 015-5zM17 18h-2A11 11 0 004 29a1 1 0 001 1h22a1 1 0 001-1 11 11 0 00-11-11zM6.06 28A9 9 0 0115 20h2a9 9 0 018.94 8z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-xl mt-4 md:mt-24" src='/svg/bg-1.svg' width="500" height="400" alt="background" />
                    <img className="md:max-w-none absolute w-full right-2 lg:right-4 rounded-xl transform animate-float mt-8 md:mt-28" src='/svg/schedule-screen3.svg' width="500" height="400" alt="schedule" />
                  </div>
                </Transition>
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-xl mt-4 md:mt-24" src='/svg/bg-1.svg' width="500" height="400" alt="background" />
                    <img className="md:max-w-none absolute w-full right-2 lg:right-4 rounded-xl transform animate-float mt-8 md:mt-28" src='/svg/monitor-screen.svg' width="500" height="400" alt="monitor screen" />
                  </div>
                </Transition>
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded-xl mt-4 md:mt-24" src='/svg/bg-1.svg' width="500" height="400" alt="Background" />
                    <img className="md:max-w-none absolute w-full right-2 lg:right-4 rounded-xl transform animate-float mt-8 md:mt-28" src='/svg/artist-screen2.svg' width="500" height="400" alt="line up list" />
                  </div>
                </Transition>
              </div>
            </div >
          </div >
        </div >
      </div >
    </section >
  );
}

export default Features;

import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, []); 


  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

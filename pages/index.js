import React, { useEffect } from 'react';
import Head from 'next/head'
import AOS from 'aos';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features'
import Examples from '../components/Examples'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


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
    <>
      <Head>
        <title>Scheduled.live - Schedules for festivals, conferences and events.</title>
        <meta name="description" content="Effortless schedules designed for event organisers and attendees of festivals and conferences."></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" sizes="96x96" href="/favicons/favicon.ico" />
        <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
        <meta charset="UTF-8"></meta>

        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://www.scheduled.live" />
        <meta property="og:title" content="Scheduled.live" />
        <meta property="og:description" content="Effortless schedules for festivals, conferences and events." />
        <meta property="og:image" content="https://www.scheduled.live/images/scheduled-screen.jpg" />

      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Examples />
          {/* <FeaturesBlocks />*/}
          <Contact /> 
        </main>
        <Footer />
      </div>
    </>
  )
}

import React from 'react'
import About from "../about/about";
import AboutAccordion from "../about/about-accordion";
import Features from "../features/features";
import Header from "../header/header";
import Newsletter from '../newsletter/newsletter';
import Testimonials from '../testimonials/testimonials';
import Videocontainer from '../video/video-container';
import Newfooter from '../newfooter/newfooter';
import Demovideo from "../demo/demovideo"

function Home1() {
    return (
        <>
            <Header />
            <About />
            <Demovideo />
            <Videocontainer />
            <Features />
            <Testimonials />
            <Newfooter />
            <AboutAccordion />
        </>
    )
}

export default Home1;

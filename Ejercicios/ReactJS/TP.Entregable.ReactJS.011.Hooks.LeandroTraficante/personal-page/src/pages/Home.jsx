import React from 'react';
import Banner from '../components/Banner.jsx';
import Services from '../components/Services.jsx';
import Convert from '../components/Convert.jsx';
import Gallery from '../components/Gallery.jsx';
import Contact from '../components/Contact.jsx';
import Projects from '../components/Projects.jsx';

function Home() {
    return (
        <div >
            <div>
                <Services />
                <Convert />
                <Gallery />
                <Contact />
                <Projects />
            </div>
            <Banner />
        </div>
    );
}

export default Home;
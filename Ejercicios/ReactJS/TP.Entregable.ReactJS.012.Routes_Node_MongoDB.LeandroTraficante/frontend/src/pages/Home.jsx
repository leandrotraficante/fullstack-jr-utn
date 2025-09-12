import React from 'react';
import Banner from '../components/Banner.jsx';
import Skills from '../components/Skills.jsx';
import Convert from '../components/Convert.jsx';
import Gallery from '../components/Gallery.jsx';
import Contact from '../components/Contact.jsx';
import Projects from '../components/Projects.jsx';
import { Box } from '@mui/material';

function Home() {
    return (
        <Box>
            <Box sx={{ mb: 4 }}>
                <Skills />
                <Convert />
                <Gallery />
                <Contact />
                <Projects />
            </Box>
            <Banner />
        </Box>
    );
}

export default Home;
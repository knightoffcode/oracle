import React from 'react';
import Highlight from '../../components/Highlight/Highlight';
import Recommendation from '../../components/Recommendation/';
import Advantadges from '../../components/Advantadges/';
import FAQ from '../../components/FAQ/';
import { Fade } from 'react-awesome-reveal';

/**
 *
 * @returns
 */

function Home() {
    
    return (
        <div className='home-page'>
             <Fade cascade damping={0.2}>
                <Highlight />
                <Recommendation />
                <Advantadges />
                <FAQ />
             </Fade>
        </div>
    );
};

export default Home;

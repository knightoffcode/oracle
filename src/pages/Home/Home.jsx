import React from 'react'
import Highlight from '../../components/Highlight/Highlight'
import Recommendation from '../../components/Recommendation/'
import Advantadges from '../../components/Advantadges/'
import FAQ from '../../components/FAQ/'

/**
 *
 * @returns
 */

function Home() {
    return (
        <div className='home-page'>
            <Highlight />
            <Recommendation />
            <Advantadges />
            <FAQ />
        </div>
    )
}

export default Home

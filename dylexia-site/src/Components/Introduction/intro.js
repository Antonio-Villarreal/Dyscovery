import React from 'react';
import bgPic from '../Images/homePageBg.jpg';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div className='hero-container'>
            <img src={bgPic}/>
            </div>
        </body>
    )
}

export default Introduction;
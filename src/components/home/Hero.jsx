import React from 'react';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

const Hero = React.memo(() => {
    return (
        <>
            <HeroDesktop />
            <HeroMobile />
        </>
    );
});

export default Hero;

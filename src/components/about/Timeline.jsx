import React from 'react';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

const Timeline = React.memo(() => {
    return (
        <>
            <TimelineDesktop />
            <TimelineMobile />
        </>
    );
});

export default Timeline;

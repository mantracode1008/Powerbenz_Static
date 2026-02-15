import React from 'react';
import LeadershipDesktop from './LeadershipDesktop';
import LeadershipMobile from './LeadershipMobile';

const Leadership = React.memo(() => {
    return (
        <>
            {/* Separate Desktop and Mobile components for easier independent styling */}
            <LeadershipDesktop />
            <LeadershipMobile />
        </>
    );
});

export default Leadership;

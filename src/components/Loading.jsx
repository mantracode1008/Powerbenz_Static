import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/90 backdrop-blur-sm">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
                <div className="mt-4 text-white font-semibold tracking-wider text-sm animate-pulse">LOADING...</div>
            </div>
        </div>
    );
};

export default Loading;

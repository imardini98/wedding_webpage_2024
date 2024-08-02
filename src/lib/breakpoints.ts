import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useTailwindBreakpoints = () => {
    const isSm = useMediaQuery({ query: '(min-width: 640px)' });
    const isMd = useMediaQuery({ query: '(min-width: 768px)' });
    const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
    const is2Xl = useMediaQuery({ query: '(min-width: 1536px)' });
    const isXs = useMediaQuery({ query: '(max-width: 639px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    return {
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
        isTabletOrMobile,
        isPortrait,
        isRetina,
        isXs
    };
};

export default useTailwindBreakpoints;

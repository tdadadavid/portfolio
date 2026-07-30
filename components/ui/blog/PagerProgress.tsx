'use client';

import { useEffect, useState } from 'react';

export const PagerProgress = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.body.scrollHeight - window.innerHeight;
            if (scrollable <= 0) {
                setPercent(100);
                return;
            }
            setPercent(Math.round((window.scrollY / scrollable) * 100));
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return <span aria-live="off">{Math.min(percent, 100)}%</span>;
};

import React, { useState, useEffect } from 'react';

const CountingAnimation = ({ targetValue, duration }) => {
    const [count, setCount] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const targetElement = document.getElementById('target-element');

            if (scrollPosition >= targetElement.offsetTop) {
                setStartAnimation(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (startAnimation) {
            const increment = Math.ceil(targetValue / (duration / 50));
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount + increment >= targetValue) {
                        clearInterval(interval);
                        return targetValue;
                    }
                    return prevCount + increment;
                });
            }, 50);

            return () => {
                clearInterval(interval);
            };
        }
    }, [startAnimation, targetValue, duration]);

    return <span>{count}</span>;
};

export default CountingAnimation;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownText = styled.div`
  font-size: 24px;
  color: #ffffff;
`;

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <CountdownText>Starting in {timeLeft}...</CountdownText>;
};

export default Countdown;

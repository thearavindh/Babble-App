import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const animateBars = keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.5); }
`;

const WaveformContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px; // Increased height for the container
  background: #000; // Black background for contrast
  display: flex;
  justify-content: center;
  align-items: flex-end; // Align bars to the bottom of the container
  gap: 6px; // Increased space between bars
`;

const Bar = styled.div<{ delay: number }>`
  width: 86px; // Increased width of the bars
  height: 200px; // Increased height of the bars
  background: linear-gradient(to top, #1e3c72, #2a5298, #8e44ad); // Gradient colors similar to audio wave
  animation: ${animateBars} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  transform-origin: bottom;
`;

const StopButton = styled.button`
  position: absolute;
  bottom: -180px;
  background: rgba(144, 238, 144, 0.2); // Light green with glass effect
  border: 2px solid #90ee90; // Light green
  border-radius: 80%;
  width: 150px;
  height: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Waveform = ({ onStop }: { onStop: () => void }) => {
    const [bars, setBars] = useState<number[]>([]);

    useEffect(() => {
        const numBars = 20; 
        const delays = Array.from({ length: numBars }, (_, i) => (i % 5) * 0.2);
        setBars(delays);
    }, []);

    return (
        <WaveformContainer>
            {bars.map((delay, index) => (
                <Bar key={index} delay={delay} />
            ))}
            <StopButton onClick={onStop}>Stop</StopButton>
        </WaveformContainer>
    );
};

export default Waveform;

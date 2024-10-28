import React, { useState } from 'react';
import BabbleButton from './BabbleButton';
import Countdown from './Countdown';
import Waveform from './Waveform';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [countdown, setCountdown] = useState(false);

    const handleBabbleClick = () => {
        setCountdown(true);
        setTimeout(() => {
            setCountdown(false);
            setIsRecording(true);
        }, 3000);
    };

    const handleStop = () => {
        setIsRecording(false);
    };

    return (
        <div>
            {countdown ? (
                <Countdown />
            ) : (
                <>
                    {isRecording ? (
                        <Waveform onStop={handleStop} />
                    ) : (
                        <BabbleButton onClick={handleBabbleClick} />
                    )}
                </>
            )}
        </div>
    );
};

export default AudioRecorder;

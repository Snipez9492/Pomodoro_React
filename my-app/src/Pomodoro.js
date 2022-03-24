import React, { useState, useEffect } from 'react';

export default function Pomodoro() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimeOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 1)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn])


    return <div className='pomodoro'>
        <div>
            <span>{('0' + Math.floor(((time / 60000) % 60))).slice(-2)}:</span>
            <span>{('0' + Math.floor(((time / 1000) % 60))).slice(-2)}:</span>
            <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div>
            {!timerOn && time === 0 && (
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTimeOn(true)}>Start</button>
            )}
            {timerOn && (
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTimeOn(false)}>Stop</button>
            )}
            {!timerOn && time !== 0 && (
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTimeOn(true)}>Resume</button>
            )}
            {!timerOn && time > 0 && (
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTime(0)}>Reset</button>
            )}

        </div>
    </div>

}
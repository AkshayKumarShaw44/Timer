import React, { useState, useRef, useCallback } from 'react'

function StopWatch({fontcolor, accent}) {
    const [time, setTime] =  useState(0)
    let timeRef = useRef(null)

    const startTimer = () => {
        if (timeRef.current ==! null) return;

        timeRef.current = setInterval(() => {
            setTime((prev) => prev + 10)
        }, 10)
    }

    const stopTimer = () => {
        clearInterval(timeRef.current)
        timeRef.current = null
    }

    const resetTimer = () => {
        clearInterval(timeRef.current)
        timeRef.current = null
        setTime(0)
    }

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
    }

    return (
            <div className={`backdrop-blur-md bg-white/50 border border-white/30 shadow-xl p-10 rounded-2xl text-center w-80`}>
                <h1 className="text-3xl font-bold mb-6">Stopwatch ⏱️</h1>

                <div className="text-4xl font-mono mb-8 tracking-wide">
                    {formatTime(time)}
                </div>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={startTimer}
                        className={`px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg border border-white/60`}
                    >
                        Start
                    </button>

                    <button
                        onClick={stopTimer}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg border border-white/60"
                    >
                        Stop
                    </button>

                    <button
                        onClick={resetTimer}
                        className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg border border-white/60"
                    >
                        Reset
                    </button>
                </div>
            </div>
    )
}

export default StopWatch
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './progressbar/ChangingProgressProvider';
import AnimatedProgressProvider from './progressbar/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';

export const ProgressBar = () => {
  return (
    <div className='h-screen bg-[#202124] flex justify-center items-center'>
        <div className='h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem]'>
            <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 99.9]}>
            {percentage => (
            <CircularProgressbar 
                styles={buildStyles({
                    textColor: '#fff',
                    trailColor: '#fff',
                    pathColor: '#777'
                })} 
                value={percentage} 
                text={`${percentage}%`} 
                />
            )}
            </ChangingProgressProvider>
        </div>
    </div>
  )
}

export const AnimatedProgressBar = () => {
    return (
        <div className='h-screen bg-[#202124] flex justify-center items-center'>
            <div className='h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem]'>
                <AnimatedProgressProvider
                valueStart={0}
                valueEnd={100}
                duration={3}
                easingFunction={easeQuadInOut}
                repeat
                >
                    {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({ 
                            pathTransition: "none",
                            textColor: '#fff',
                            trailColor: '#fff',
                            pathColor: '#777', 
                        })}
                        />
                    );
                    }}
                </AnimatedProgressProvider>
            </div>
        </div>
    )
}
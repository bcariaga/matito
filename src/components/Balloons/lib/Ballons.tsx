'use client';
import React, { useState } from "react";
import mojs from "@mojs/core";

import { random, randomColor } from './utils';
import { StyledBalloon } from './Ballon.styles';
import { colorMaps } from "./colorMaps";

export type BallonsProps = {
    msgText?: string;
    colors?: Array<keyof typeof colorMaps>;
    // popVolumeLevel?: number;
    loop?: boolean;
    hangOnTop?: boolean;
    supportsTouch?: boolean;
    count?: number
}

export const Balloon = ({ msgText, colors = ["yellow", "blue", "purple", "green", "orange", "red"], /*popVolumeLevel = 0.5*/ loop, hangOnTop, supportsTouch = true }: BallonsProps) => {
    const delay = random(0, 5);
    const hasMsg = random(0, 2);
    const duration = 10 + random(1, 5);
    const left = random(10, 70); // random init left value to fly
    const [show, setShow] = useState(true);
    // let audio = new Audio('https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');
    // audio.volume = popVolumeLevel;

    const popBalloon = (e: React.MouseEvent<HTMLDivElement>) => {
        let t = e.currentTarget;
        let color = t.getAttribute('color');
        const burst = new mojs.Burst({
            radius: { 30: 100 },
            parent: t,
            count: 10,
            className: 'show',
            children: {
                fill: [color],
                angle: { 0: 180 },
                delay: 'stagger(0, 25)',
                shape: ['circle', 'polygon'],
            }
        });
        // audio.play();
        burst.replay();

        t.style.visibility = 'hidden';
        setTimeout(() => {
            setShow(false)
        }, 2000);
    };
    return (
        <>
            {
                show ?
                    <StyledBalloon
                        color={randomColor(colors) as keyof typeof colorMaps}
                        onClick={supportsTouch ? popBalloon : undefined}
                        onDoubleClickCapture={supportsTouch ? undefined : popBalloon}
                        animate={{
                            delay,
                            duration,
                            left,
                            loop,
                            hangOnTop,
                        }}
                        show={show}
                        visible={true}
                    >
                        <div className="string"></div>
                        {
                            hasMsg ?
                                <span className="msg text-5xl">{msgText}</span>
                                : null
                        }
                    </StyledBalloon>
                    : null
            }
        </>
    )
}

export const Balloons = ({ count, msgText, colors, loop, hangOnTop }: BallonsProps) => {
    const density = count;// concurrent balloon count
    const supportsTouch = 'ontouchstart' in window || !navigator.maxTouchPoints;
    return (
        <div className="set-of-balloons">
            {
                new Array(density).fill(null).map((b, i) =>
                    <Balloon
                        key={`balloon-${i}`}
                        {...{ msgText, colors, loop, hangOnTop, supportsTouch }}
                    />
                )
            }
        </div>
    )
}
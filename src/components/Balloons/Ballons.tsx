'use client';
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const dynamicComponents = {
    ReactFloatingBalloons: dynamic(
        () =>
            import("./lib/Ballons").then(
                (mod) => mod.Balloons
            ),
        { ssr: false }
    )
};
const Ballons = () => {
    const [supportsTouch, setSupportsTouch] = useState(false);
    useEffect(() => {
        setSupportsTouch("ontouchstart" in window || !navigator.maxTouchPoints);
    }, []);
    const RFB = dynamicComponents.ReactFloatingBalloons;

    return (
        <RFB msgText="Matito" popVolumeLevel={0.1} count={10} />
    )
}

export default Ballons
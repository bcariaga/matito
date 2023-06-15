'use client';
import React, { useRef, useState, useEffect } from "react";

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const Video = ({ src }: { src: string }) => {
    const videoParentRef = useRef<HTMLDivElement>(null);
    const [shouldUseImage, setShouldUseImage] = useState(false);
    useEffect(() => {
        if (isSafari() && videoParentRef.current) {
            const player = videoParentRef.current.children[0] as HTMLVideoElement;

            if (player) {
                player.controls = false;
                player.playsInline = true;
                player.muted = true;
                player.setAttribute("muted", "");
                player.autoplay = true;

                setTimeout(() => {
                    const promise = player.play();
                    if (promise.then) {
                        promise
                            .then(() => { })
                            .catch(() => {
                                if (videoParentRef.current) {
                                    videoParentRef.current.style.display = "none";
                                }
                                setShouldUseImage(true);
                            });
                    }
                }, 0);
            }
        }
    }, []);

    return shouldUseImage ? (
        <img src={src} alt="Muted Video" />
    ) : (
        <div
            ref={videoParentRef}
            dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${src}" type="video/mp4" />
        </video>`
            }}
        />
    );
}

export default Video;
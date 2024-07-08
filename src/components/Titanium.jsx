import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Titanium = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? exploreVideo : exploreVideo
    );

    useGSAP(() => {
        gsap.to("#titanium", { opacity: 1 });
        gsap.to("#titanium_text", { opacity: 1, y: -3, delay: 1 });
    });

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(exploreVideo);
        } else {
            setVideoSrc(exploreVideo);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet);

        return () => {
            window.addEventListener("resize", handleVideoSrcSet);
        };
    }, []);

    return (
        <section className="common-padding bg-gray-300">
            <div className="screen-max-width">
                <h1 id="titanium" className="section-heading">
                    Explore the full story.
                </h1>

                <div className='w-full mt-60'>
                    <div className='text-8xl font-bold mb-32 ml-10'>
                        iPhone.<br />
                        Forged in titanium.
                    </div>
                    <div className="w-full">
                        <video
                            className="pointer-events-none w-full"
                            autoPlay
                            muted
                            playsInline={true}
                            key={videoSrc}
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                        <div className='flex min-w-full justify-between gap-4 mt-4'>
                            <img src={explore1Img} alt="Explore 1" className="w-49p" />
                            <img src={explore2Img} alt="Explore 2" className="w-49p" />
                        </div>
                        <div id='titanium_text' className='flex w-full justify-around mt-20 opacity-0 translate-y-5'>
                            <div className='text-xl font-bold w-1/3'>
                                <p className='text-gray'>
                                    iPhone 15 Pro is <em>the first iPhone to
                                        feature an aerospace‑grade titanium design</em>, using the same alloy that spacecraft use for missions to Mars.
                                </p>
                            </div>

                            <div className='text-xl font-bold w-1/3'>
                                <p className='text-gray'>
                                    Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <em>lightest Pro models ever</em>. You’ll notice the difference the moment you pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Titanium

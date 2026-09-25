
import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/banner.png";
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="bg-[#222630] py-20">
            <div className="container mx-auto grid grid-cols-2 gap-8 items-center px-6">

                {/* Left Side */}
                <div className="space-y-5">

                    {/* Eyebrow */}
                    <p className="text-[#ccff00] font-semibold">
                        WORKOUT LIBRARY
                    </p>

                    {/* Heading */}
                    <h2 className="font-bold text-5xl text-white">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-300">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    {/* CTA Button */}
                    <Link href="#library" className="btn bg-[#ccff00] text-black border-none" > 
                    BROWSE WORKOUTS 
                     </Link>

                </div>

                {/* Right Side */}
                <div>
                    <Image
                        src={bannerImg}
                        alt="Workout banner"
                        className="w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;


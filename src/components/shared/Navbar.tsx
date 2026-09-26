"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
    const { plan, saved } = useWorkout();

    return (
        <nav className="w-full bg-[#0d0f12] border-b border-gray-800">
            <div className="container mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={logo}
                        alt="FITLOG"
                        width={40}
                        height={40}
                        className="object-contain"
                    />

                    <span className="text-white text-xl font-bold">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-[#ccff00]"
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className="text-gray-300 hover:text-[#ccff00]"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Plan and Saved */}
                <div className="flex items-center gap-3">

                    <Link
                        href="/my-plan"
                        className="btn bg-[#ccff00] text-black border-none"
                    >
                        Plan {plan.length}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="btn btn-outline text-white border-gray-600"
                    >
                        Saved {saved.length}
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d0f12] border-t border-gray-800">
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

                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
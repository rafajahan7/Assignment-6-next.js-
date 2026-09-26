"use client";

import React, { useEffect, useState } from "react";
import LibraryCard from "@/components/shared/libraryCard";
import { IWorkout } from "@/types/library.types";

const Library = () => {

    const [libraryData, setLibraryData] = useState<IWorkout[]>([]);

    useEffect(() => {
        const getLibrary = async () => {
            const response = await fetch("/libraryData.json");
            const data = await response.json();

            setLibraryData(data);
        };

        getLibrary();
    }, []);

    return (
        <section id="library" className="bg-[#0d0f12] py-16">

            <div className="container mx-auto px-6">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">
                        THE LIBRARY
                    </h2>

                    <p className="text-gray-400 mt-1">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {libraryData.map((workout) => (
                        <LibraryCard
                            key={workout.id}
                            library={workout}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Library;
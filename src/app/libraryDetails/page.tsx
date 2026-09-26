"use client";

import React, { useEffect, useState } from "react";
import LibraryCard from "@/components/shared/libraryCard";
import { IWorkout } from "@/types/library.types";
import { useWorkout } from "@/context/WorkoutContext";

const Library = () => {
    const [libraryData, setLibraryData] = useState<IWorkout[]>([]);
    const [error, setError] = useState("");

    const { addToPlan, addToSaved } = useWorkout();

    useEffect(() => {
        const getLibrary = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

                const response = await fetch(
                    `${baseUrl}/libraryData.json`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch library data");
                }

                const data: IWorkout[] = await response.json();

                setLibraryData(data);
            } catch (error) {
                console.error("Error fetching library:", error);
                setError("Failed to load library.");
            }
        };

        getLibrary();
    }, []);

    if (error) {
        return (
            <section className="bg-[#0d0f12] py-16 min-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white">
                        {error}
                    </h2>
                </div>
            </section>
        );
    }

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
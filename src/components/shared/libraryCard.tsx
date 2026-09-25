import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkout {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
}

interface LibraryCardProps {
    library: IWorkout;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
    return (
        <Link
            href={`/workouts/${library.id}`}
            className="bg-[#171a20] rounded-lg overflow-hidden border border-gray-800 hover:border-[#ccff00] transition"
        >

            {/* Image */}
            <Image
                src={library.image}
                alt={library.name}
                width={800}
                height={700}
                className="w-full h-40 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">

                {/* Category Tags */}
                <div className="flex gap-2 mb-3">
                    {library.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="bg-[#ccff00] text-black text-[9px] font-bold px-2 py-1 rounded-full uppercase"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-white font-bold text-sm uppercase">
                    {library.name}
                </h3>

                {/* Equipment */}
                <p className="text-gray-500 text-xs mt-1">
                    {library.equipment}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mt-5 text-gray-400 text-xs">

                    <span>
                        ◷ {library.duration} min
                    </span>

                    <span>
                        🔥 {library.caloriesBurned} kcal
                    </span>

                    <span>
                        ★ {library.rating}
                    </span>

                </div>

            </div>

        </Link>
    );
};

export default LibraryCard;
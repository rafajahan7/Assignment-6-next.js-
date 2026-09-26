import { IWorkout } from "@/types/library.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LibraryCardProps {
    library: IWorkout;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
    return (
        <Link
            href={`/libraryDetails/${library.id}`}
            className="bg-[#171a20] rounded-lg overflow-hidden border border-gray-800 hover:border-[#ccff00] transition"
        >

            
            <Image
                src={library.image}
                alt={library.name}
                width={800}
                height={700}
                className="w-full h-40 object-cover"
            />

            
            <div className="p-4">

                
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

                
                <h3 className="text-white font-bold text-sm uppercase">
                    {library.name}
                </h3>

                
                <p className="text-gray-500 text-xs mt-1">
                    {library.equipment}
                </p>

                
                <div className="flex items-center gap-4 mt-5 text-gray-400 text-xs">
                    <span>◷ {library.duration} min</span>

                    <span>🔥 {library.caloriesBurned} kcal</span>

                    <span>★ {library.rating}</span>
                </div>

            </div>

        </Link>
    );
};

export default LibraryCard;
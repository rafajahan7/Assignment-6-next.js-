"use client";

import React, { useEffect, useState } from "react";
import { IWorkout } from "@/types/library.types";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

interface ILibraryDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const LibraryDetails = ({ params }: ILibraryDetailsProps) => {
    const [workout, setWorkout] = useState<IWorkout | null>(null);

    const { addToPlan, addToSaved } = useWorkout();

    // Unwrap params Promise
    const { id } = React.use(params);

    useEffect(() => {
        const getLibrary = async () => {
            const response = await fetch("/libraryData.json");
            const data: IWorkout[] = await response.json();

            const selectedWorkout = data.find(
                (library) => library.id.toString() === id
            );

            setWorkout(selectedWorkout || null);
        };

        getLibrary();
    }, [id]);

    if (!workout) {
        return (
            <div className="min-h-screen bg-[#0d0f12] text-white p-10">
                <h1 className="text-3xl font-bold">
                    Workout Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d0f12] p-6 flex items-center justify-center">
            <div className="card lg:card-side bg-[#0d0f12] text-white shadow-sm max-w-6xl w-full">

                {/* Image */}
                <figure className="lg:w-1/2">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="w-full h-[500px] object-cover rounded-lg"
                    />
                </figure>

                {/* Details */}
                <div className="card-body lg:w-1/2">

                    <h2 className="card-title text-3xl font-bold uppercase">
                        {workout.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="flex gap-2 mt-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge bg-[#ccff00] text-black border-none"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="bg-[#171a20] border border-gray-800 rounded-lg mt-4">

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Equipment
                            </span>
                            <span className="text-sm">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Difficulty
                            </span>
                            <span className="text-sm">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Sets
                            </span>
                            <span className="text-sm">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Reps
                            </span>
                            <span className="text-sm">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Duration
                            </span>
                            <span className="text-sm">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between p-3 border-b border-gray-800">
                            <span className="text-gray-500 text-xs uppercase">
                                Calories
                            </span>
                            <span className="text-sm">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between p-3">
                            <span className="text-gray-500 text-xs uppercase">
                                Rating
                            </span>
                            <span className="text-sm">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    {/* Instructions */}
                    <div className="mt-4">
                        <h3 className="font-bold text-sm uppercase">
                            Instructions
                        </h3>

                        <ol className="list-decimal ml-5 mt-2 text-gray-400 text-sm space-y-2">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index}>
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-5">

                        <button
                            onClick={() => {
                                addToPlan(workout);
                                toast.success("Added to today's plan!");
                            }}
                            className="btn bg-[#ccff00] text-black border-none"
                        >
                            Add to today's plan
                        </button>

                        <button
                            onClick={() => {
                                addToSaved(workout);
                                toast.success("Saved for later!");
                            }}
                            className="btn btn-outline border-gray-700 text-white"
                        >
                            Save for later
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default LibraryDetails;
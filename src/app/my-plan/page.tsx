"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");

    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
    } = useWorkout();

    const workouts = activeTab === "plan" ? plan : saved;

    // Calculate stats
    const totalExercises = workouts.length;

    const totalMinutes = workouts.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + Number(workout.calories || 0),
        0
    );

    // Sort workouts
    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return Number(a.duration || 0) - Number(b.duration || 0);
        }

        if (sortBy === "calories") {
            return Number(a.calories || 0) - Number(b.calories || 0);
        }

        return a.name.localeCompare(b.name);
    });

    return (
        <div className="min-h-screen bg-[#0d0f12] text-white px-7 py-6">

            {/* Header */}
            <div className="mb-7">
                <h1 className="text-2xl font-extrabold tracking-tight">
                    MY PLAN
                </h1>

                <p className="text-xs text-gray-500 mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* Stats */}
            <div className="w-full rounded-xl border border-[#242830] bg-[#12151b] px-5 py-4 mb-5">

                <div className="grid grid-cols-3">

                    {/* Exercises */}
                    <div>
                        <p className="text-[10px] text-gray-500 mb-1">
                            Exercises
                        </p>

                        <p className="text-2xl font-bold text-[#ccff00]">
                            {totalExercises}
                        </p>
                    </div>


                    {/* Minutes */}
                    <div>
                        <p className="text-[10px] text-gray-500 mb-1">
                            Minutes
                        </p>

                        <p className="text-2xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>


                    {/* Calories */}
                    <div>
                        <p className="text-[10px] text-gray-500 mb-1">
                            Calories
                        </p>

                        <p className="text-2xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>
            </div>


            {/* Tabs + Sort */}
            <div className="flex items-center justify-between mb-5">

                {/* Tabs */}
                <div className="flex items-center bg-[#15181e] border border-[#242830] rounded-md p-0.5">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`px-5 py-1.5 text-[10px] rounded-md transition ${
                            activeTab === "plan"
                                ? "bg-[#292d35] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-5 py-1.5 text-[10px] rounded-md transition ${
                            activeTab === "saved"
                                ? "bg-[#292d35] text-white"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>

                </div>


                {/* Sort */}
                <div className="flex items-center gap-2">

                    <span className="text-[10px] text-gray-500">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#15181e] border border-[#242830] text-gray-300 text-[10px] rounded-md px-2 py-1.5 outline-none"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="name">
                            Name
                        </option>
                    </select>

                </div>

            </div>


            {/* Workout Cards */}
            {sortedWorkouts.length > 0 ? (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {sortedWorkouts.map((workout) => (

                        <div
                            key={workout.id}
                            className="rounded-xl overflow-hidden bg-[#15181e] border border-[#242830]"
                        >

                            <img
                                src={workout.image}
                                alt={workout.name}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">

                                <h2 className="text-lg font-bold">
                                    {workout.name}
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    {workout.equipment}
                                </p>

                                <div className="flex gap-2 mt-5">

                                    <Link
                                        href={`/libraryDetails/${workout.id}`}
                                        className="px-4 py-2 rounded-md bg-[#ccff00] text-black text-xs font-bold"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() =>
                                            activeTab === "plan"
                                                ? removeFromPlan(workout.id)
                                                : removeFromSaved(workout.id)
                                        }
                                        className="px-4 py-2 rounded-md border border-gray-700 text-xs text-gray-300 hover:bg-gray-800"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                /* Empty State */
                <div className="h-[175px] w-full border border-dashed border-[#252a32] rounded-lg flex flex-col items-center justify-center">

                    <h2 className="text-xs font-bold tracking-wide text-gray-200 uppercase">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-[9px] text-gray-500 mt-1">
                        Browse the library and add it all to get moving.
                    </p>

                    <Link
                        href="/workouts"
                        className="mt-3 px-5 py-1.5 rounded-full bg-[#ccff00] text-black text-[9px] font-bold shadow-[0_0_15px_rgba(204,255,0,0.15)] hover:bg-[#d8ff33] transition"
                    >
                        Go to workouts
                    </Link>

                </div>

            )}

        </div>
    );
};

export default MyPlan;
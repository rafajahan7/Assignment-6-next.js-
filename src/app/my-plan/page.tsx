"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState("plan");

    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
    } = useWorkout();

    const workouts = activeTab === "plan" ? plan : saved;

    return (
        <div className="min-h-screen bg-[#0d0f12] text-white p-6">

            <h1 className="text-3xl font-bold mb-6">
                MY PLAN
            </h1>

            {/* Tabs */}
            <div className="flex gap-3 mb-8">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`btn ${
                        activeTab === "plan"
                            ? "bg-[#ccff00] text-black border-none"
                            : "btn-outline"
                    }`}
                >
                    Today's Plan ({plan.length})
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`btn ${
                        activeTab === "saved"
                            ? "bg-[#ccff00] text-black border-none"
                            : "btn-outline"
                    }`}
                >
                    Saved ({saved.length})
                </button>

            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {workouts.map((workout) => (
                    <div
                        key={workout.id}
                        className="card bg-[#171a20] border border-gray-800"
                    >

                        <figure>
                            <img
                                src={workout.image}
                                alt={workout.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>

                        <div className="card-body">

                            <h2 className="card-title">
                                {workout.name}
                            </h2>

                            <p className="text-gray-400">
                                {workout.equipment}
                            </p>

                            <div className="card-actions mt-4">

                                <Link
                                    href={`/libraryDetails/${workout.id}`}
                                    className="btn bg-[#ccff00] text-black border-none"
                                >
                                    View Details
                                </Link>

                                {activeTab === "plan" ? (
                                    <button
                                        onClick={() =>
                                            removeFromPlan(workout.id)
                                        }
                                        className="btn btn-outline"
                                    >
                                        Remove
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            removeFromSaved(workout.id)
                                        }
                                        className="btn btn-outline"
                                    >
                                        Remove
                                    </button>
                                )}

                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {workouts.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No workouts added yet.
                </div>
            )}

        </div>
    );
};

export default MyPlan;
"use client";

import React, { createContext, useContext, useState } from "react";
import { IWorkout } from "@/types/library.types";

interface WorkoutContextType {
    plan: IWorkout[];
    saved: IWorkout[];

    addToPlan: (workout: IWorkout) => boolean;
    addToSaved: (workout: IWorkout) => boolean;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

export const WorkoutProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);

    // Add workout to Today's Plan
    const addToPlan = (workout: IWorkout) => {
        const alreadyExists = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return false;
        }

        setPlan([...plan, workout]);

        return true;
    };

    // Add workout to Saved
    const addToSaved = (workout: IWorkout) => {
        const alreadyExists = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return false;
        }

        setSaved([...saved, workout]);

        return true;
    };

    // Remove workout from Today's Plan
    const removeFromPlan = (id: number) => {
        setPlan(plan.filter((item) => item.id !== id));
    };

    // Remove workout from Saved
    const removeFromSaved = (id: number) => {
        setSaved(saved.filter((item) => item.id !== id));
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                addToSaved,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

// Custom hook
export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
};
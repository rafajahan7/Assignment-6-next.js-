import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-7xl font-bold text-[#ccff00]">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-white mt-4">
                Workout Not Found
            </h2>

            <p className="text-gray-400 mt-2">
                The page you're looking for doesn't exist.
            </p>

            <Link
                href="/"
                className="mt-6 btn bg-[#ccff00] text-black border-none"
            >
                Back to Workouts
            </Link>
        </div>
    );
}
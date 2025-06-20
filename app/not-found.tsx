"use client";

import { Frown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="flex h-full flex-col py-52 items-center justify-center gap-2 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Frown className="w-10 text-gray-200" />
      <h2 className="text-xl text-emerald-500 font-semibold">404 Not Found</h2>
      <p className="text-gray-300">
        The page you are looking for does not exist. Please check the URL or go
        back.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </button>
    </main>
  );
}

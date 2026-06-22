"use client";

import { useUser } from "@/Components/layout/AuthContext";

export default function WelcomeBanner() {
  const { user } = useUser();

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8">
      <h1 className="text-3xl font-bold capitalize">
        Welcome Back, {user?.name} 👋
      </h1>

      <p className="mt-2 opacity-90">
        Continue sharing your life lessons and inspire others.
      </p>
    </div>
  );
}
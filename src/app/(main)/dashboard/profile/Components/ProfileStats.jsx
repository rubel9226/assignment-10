"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/baseAPI";

export default function ProfileStats() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await api.get("/users/profile-stats");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="card bg-base-100 shadow">
        <div className="card-body text-center">
          <h3 className="text-3xl font-bold">
            {stats.totalLessons || 0}
          </h3>
          <p>Total Lessons</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body text-center">
          <h3 className="text-3xl font-bold">
            {stats.publicLessons || 0}
          </h3>
          <p>Public Lessons</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body text-center">
          <h3 className="text-3xl font-bold">
            {stats.totalFavorites || 0}
          </h3>
          <p>Favorites</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body text-center">
          <h3 className="text-3xl font-bold">
            {stats.totalLikes || 0}
          </h3>
          <p>Likes Received</p>
        </div>
      </div>
    </div>
  );
}
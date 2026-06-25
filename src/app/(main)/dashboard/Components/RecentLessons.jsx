"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/baseAPI";
import { useUser } from "@/Components/layout/AuthContext";

export default function RecentLessons({lessons}) {
  // const [lessons, setLessons] = useState([]);
  // const {token} = useUser();

  // useEffect(() => {
  //   loadLessons();
  // }, []);

  // const loadLessons = async () => {
  //   try {
  //     const res = await api.get( "/lessons/recent-lessons", {
  //       headers: {
  //         Authorization: token
  //       }
  //     });

  //     setLessons(res?.data?.payload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="bg-base-100 rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Recently Added Lessons
      </h2>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="border rounded-xl p-4"
          >
            <h3 className="font-semibold">
              {lesson.title}
            </h3>

            <p className="text-sm opacity-70">
              {lesson.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
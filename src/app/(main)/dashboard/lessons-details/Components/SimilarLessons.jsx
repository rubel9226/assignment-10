"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/app/api/baseAPI";

export default function SimilarLessons({ lessonId }) {
  const [lessons, setLessons] = useState([]);

  const getSimilar = async () => {
    try {
      const res = await api.get(`/lessons/similar/${lessonId}`);

      setLessons(res.data.payload || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (lessonId) {
      getSimilar();
    }
  }, [lessonId]);

  if (!lessons.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Similar Lessons</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {lessons.slice(0, 6).map((item) => (
          <div key={item._id} className="card bg-base-200 shadow">
            <img
              src={item.image}
              className="h-48 w-full object-cover rounded-t"
            />

            <div className="p-5">
              <div className="flex gap-2">
                <span className="badge">{item.category}</span>

                <span className="badge badge-secondary">
                  {item.emotionalTone}
                </span>
              </div>

              <h3 className="font-bold text-xl mt-3">{item.title}</h3>

              <p className="text-sm opacity-70 mt-2">
                {item.description.slice(0, 100)}...
              </p>

              <Link
                href={`/dashboard/lessons-details/${item._id}`}
                className="btn btn-primary btn-sm mt-4"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

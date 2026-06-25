"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import Link from "next/link";

export default function UserLessons({lessons}) {
  const { user, token } = useUser();


  // const [lessons, setLessons] = useState([]);

  // useEffect(() => {
  //   if (user?.id) {
  //     loadLessons();
  //   }
  // }, [user]);

  // const loadLessons = async () => {
  //   try {
  //     const res = await api.get( `/users/my-public-lessons`, {
  //           headers: {
  //               Authorization: token, 
  //           }
  //       }
  //     );

  //     setLessons(res?.data?.payload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-5">
        My Public Lessons
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="card bg-base-100 shadow"
          >
            <figure className="aspect-[1.85]">
              <img
                src={lesson.image}
                alt={lesson.title}
                className=" overflow-hidden"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title line-clamp-1">
                {lesson.title}
              </h2>

              <p>{lesson.category}</p>

              <p>{lesson.emotionalTone}</p>

              <Link
                href={`/dashboard/lessons-details/${lesson._id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
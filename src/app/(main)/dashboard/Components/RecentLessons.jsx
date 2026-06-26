"use client";

import Link from "next/link";

export default function lessons({lessons=[]}) {

  return (
    <div className="rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Recently Added Lessons
      </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
"use client";

import { FaBookmark, FaHeart } from "react-icons/fa";
import LessonRow from "./LessonRow";
import { BiMessage } from "react-icons/bi";

export default function MyLessonTable({ lessons, setLessons }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table bg-base-200">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Visibility</th>
              <th>Access</th>
              <th>Stats</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <LessonRow
                key={lesson._id}
                lesson={lesson}
                lessons={lessons}
                setLessons={setLessons}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="
              card 
              bg-base-200
              shadow-md
              p-5
            "
          >
            <h2 className="text-xl font-bold">{lesson.title}</h2>

            <p className="text-sm opacity-70 mt-2">
              {lesson.description?.slice(0, 70)}...
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge badge-primary">{lesson.category}</span>

              <span className="badge badge-secondary">
                {lesson.emotionalTone}
              </span>

              <span className="badge">{lesson.visibility}</span>

              <span className="badge">{lesson.accessLevel}</span>
            </div>

            <div className="mt-4 text-sm flex gap-3">
              <div className="flex gap-1 items-center">
                <FaHeart className="inline" /> {lesson.likesCount}
              </div>
              <div className="flex gap-1 items-center">
                <FaBookmark /> {lesson.favoritesCount}
              </div>
              <div className="flex gap-1 items-center">
                <BiMessage /> {lesson.commentsCount}
              </div>
            </div>

            <div className="flex gap-2 mt-5 flex-wrap">
              <a
                href={`/lessons-details/${lesson._id}`}
                className="btn btn-sm btn-primary"
              >
                Details
              </a>

              <a
                href={`/dashboard/update-lesson/${lesson._id}`}
                className="btn btn-sm btn-info"
              >
                Update
              </a>

              <button className="btn btn-sm btn-error">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

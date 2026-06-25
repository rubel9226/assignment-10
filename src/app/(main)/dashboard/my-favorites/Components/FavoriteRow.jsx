"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FavoriteRow({ lesson, handleRemove }) {
  

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <img
            src={lesson.image}
            alt=""
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold">
              {lesson?.title?.slice(0, 60)}
            </h3>
          </div>
        </div>
      </td>

      <td>{lesson.category}</td>

      <td>
        {lesson.emotionalTone}
      </td>

      <td>
        {lesson.favoritesCount}
      </td>

      <td>
        {new Date(
          lesson.createdAt
        ).toLocaleDateString()}
      </td>

      <td>
        <div className="flex gap-2">
          <Link
            href={`/dashboard/lessons-details/${lesson._id}`}
            className="btn btn-sm btn-primary"
          >
            Details
          </Link>

          <button
            onClick={() =>handleRemove(lesson._id)}
            className="btn btn-sm btn-error"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}
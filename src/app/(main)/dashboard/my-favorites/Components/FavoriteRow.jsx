"use client";

import Link from "next/link";
import Swal from "sweetalert2";
import { api } from "@/lib/baseAPI";

export default function FavoriteRow({
  lesson,
  reload,
}) {
  const handleRemove = async () => {
    const result =
      await Swal.fire({
        title:
          "Remove from favorites?",
        icon: "warning",
        showCancelButton: true,
      });

    if (!result.isConfirmed) return;

    try {
      await api.patch(
        `/lessons/remove-favorite/${lesson._id}`
      );

      Swal.fire({
        icon: "success",
        title: "Removed",
        timer: 1200,
        showConfirmButton: false,
      });

      reload();
    } catch (error) {
      console.log(error);
    }
  };

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
            href={`/lessons/${lesson._id}`}
            className="btn btn-sm btn-primary"
          >
            Details
          </Link>

          <button
            onClick={handleRemove}
            className="btn btn-sm btn-error"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}
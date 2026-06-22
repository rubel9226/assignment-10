"use client";

import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2"; 
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import { BiMessage } from "react-icons/bi";
import { FaBookmark, FaHeart } from "react-icons/fa"; 

export default function LessonRow({ lesson, lessons, setLessons }) {
  const { token } = useUser();


  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Delete lesson?",

      text: "This cannot be undone",

      icon: "warning",

      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    try {
      await api.delete( `/lessons/delete-lesson/${lesson._id}`, 
          {
            headers: {
              Authorization: token,
            },
          },
      );

      setLessons((prev) => prev.filter((item) => item._id !== lesson._id));

      Swal.fire("Deleted!", "", "success"); 
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message, );

      Swal.fire(
        "Error!", 
        error?.response?.data?.message, 
        "success");
    }
  };

  return (
    <tr>
      <td className="">
        <div className="font-bold ">{lesson.title?.slice(0, 30)}...</div>

        <div className="text-sm opacity-60">{lesson.emotionalTone}</div>
      </td>

      <td>{lesson.category}</td>

      <td>
        {lesson.visibility} 
      </td>

      <td>
        {lesson.accessLevel}
      </td>

      <td>
        <div className="flex gap-1 items-center">
          <FaHeart className="" /> {lesson.likesCount}
        </div>
        <div className="flex gap-1  items-center">
          <FaBookmark /> {lesson.favoritesCount}
        </div>
        <div className="flex gap-1  items-center">
          <BiMessage /> {lesson.commentsCount}
        </div>
      </td>

      <td>
        <div className="flex gap-2">
          <Link href={`/lessons-details/${lesson._id}`} className="btn btn-xs">
            Details
          </Link>

          <Link
            href={`/dashboard/update-lesson/${lesson._id}`}
            className="btn btn-xs btn-info"
          >
            Update
          </Link>

          <button onClick={handleDelete} className="btn btn-xs btn-error">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

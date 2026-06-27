'use client';

import { useState } from "react";
import FavoriteRow from "./FavoriteRow";
import FavoritesFilter from "./FavoritesFilter";
import { useRouter } from "next/navigation"; 
import { useUser } from "@/Components/layout/AuthContext";
import Swal from "sweetalert2";

import { api } from "@/lib/baseAPI";

export default function FavoritesCardTable({ lessons }) {
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("");

  const filteredLessons = lessons.filter(
    (lesson) => {
      const categoryMatch =
        !category ||
        lesson.category === category;

      const toneMatch =
        !tone ||
        lesson.emotionalTone === tone;

      return categoryMatch && toneMatch;
    }
  );

  const router = useRouter();
  const {token} = useUser();



  const handleRemove = async (id) => {
    const result = await Swal.fire({
        title: "Remove from favorites?",
        icon: "warning",
        showCancelButton: true,
      });

    if (!result.isConfirmed) return;

    try {
      await api.patch(`/users/remove-favorite/${id}`, {},{
        headers: {
          Authorization: token,
      }
      });

      Swal.fire({
        icon: "success",
        title: "Removed",
        timer: 1200,
        showConfirmButton: false,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <FavoritesFilter
        category={category}
        setCategory={setCategory}
        tone={tone}
        setTone={setTone} 
      />
      
      {
        filteredLessons.length === 0 
        ? <div className="col-span-full flex flex-col items-center justify-center py-20 min-h-[40vh]">
              <h3 className="text-2xl font-semibold text-gray-300">
                  No Lessons Found
              </h3>

              <p className="text-gray-500 mt-2">
                  Try changing your filters or search criteria.
              </p>
          </div> 
          :<>
            <div className="hidden lg:block bg-base-100 rounded-2xl shadow overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Lesson</th>
                    <th>Category</th>
                    <th>Tone</th>
                    <th>Favorites</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLessons.map((lesson) => (
                    <FavoriteRow
                      key={lesson._id}
                      lesson={lesson}
                      handleRemove={handleRemove}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="lg:hidden space-y-4">
              {filteredLessons.map((lesson) => (
                <div
                  key={lesson._id}
                  className="bg-base-100 rounded-2xl shadow p-4"
                >
                  <div className="flex gap-3">
                    <img
                      src={lesson.image}
                      alt={lesson.title}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold line-clamp-2">
                        {lesson.title}
                      </h3>

                      <p className="text-sm opacity-70">
                        {lesson.category}
                      </p>

                      <p className="text-sm opacity-70">
                        {lesson.emotionalTone}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                    <div>
                      <span className="font-semibold">
                        Favorites:
                      </span>{" "}
                      {lesson.favoritesCount}
                      {lesson._id}
                    </div>

                    <div>
                      <span className="font-semibold">
                        Created:
                      </span>{" "}
                      {new Date(
                        lesson.createdAt
                      ).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="block">
                      <div className="flex gap-2 mt-4">
                      <a
                          href={`/dashboard/lessons-details/${lesson._id}`}
                          className="btn btn-primary btn-sm flex-1"
                      >
                          Details
                      </a>

                      <button
                          className="btn btn-error btn-sm flex-1"
                          onClick={() => handleRemove(lesson._id)}
                      >
                          Remove
                      </button>
                      </div>
                  </div>

                </div>
              ))}
            </div>
          </>
      }
    </>
  );
}
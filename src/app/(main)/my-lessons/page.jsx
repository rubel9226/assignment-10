"use client";

import { useEffect, useState } from "react"; 
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";


import MyLessonTable from "./components/MyLessonTable";
import Link from "next/link";

export default function MyLessonsPage() {
  const { user, token } = useUser();

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyLessons = async () => {
    try {
      setLoading(true);

      const res = await api.get("/lessons/my-lessons", {
        headers: {
          Authorization: token,
        },
      });

      setLessons(res?.data?.payload || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getMyLessons();
    }
  }, [token]); 

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-8">My Lessons</h1>

      {loading ? 
        <div className="flex justify-center mt-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
        : 
      lessons.length === 0 ? (
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold">No lessons found</h2>

          <Link href="/dashboard/add-lesson" className="btn btn-primary mt-5">
            Create Lesson
          </Link>
        </div>
      ) : (
        <MyLessonTable lessons={lessons} setLessons={setLessons} />
      )}
    </div>
  );
}

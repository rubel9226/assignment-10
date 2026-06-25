
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";


import Link from "next/link";
import MyLessonTableDeskMobile from "./Components/MyLessonTableDeskMobile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function MyLessonsPage() { 
    let lessons = {};
    try {
        const token = await auth.api.getToken({
            headers: await headers ()
        });
        const res = await api.get("/lessons/my-lessons", {
          headers: {
            Authorization: token?.token,
          },
        }); 
        lessons = res?.data?.payload;
    } catch (error) {
        console.log(error); 
    } 

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-8">My Lessons</h1>

      { 
      lessons.length === 0 ? (
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold">No lessons found</h2>

          <Link href="/dashboard/add-lesson" className="btn btn-primary mt-5">
            Create Lesson
          </Link>
        </div>
      ) : (
        <MyLessonTableDeskMobile lessons={lessons}/>
      )}
    </div>
  );
}

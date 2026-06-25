import { auth } from "@/lib/auth";
import ManageLessonsFilters from "./Components/ManageLessonsFilters";
import ManageLessonsStats from "./Components/ManageLessonsStats";
import ManageLessonsTable from "./Components/ManageLessonsTable";
import { headers } from "next/headers";
import { api } from "@/lib/baseAPI";



export default async function ManageLessonsPage() {
  let token = '';
  let lessons = [];
  let category = '';
  try {
    token = await auth.api.getToken({
        headers: await headers ()
    });
    const lessonsRes = await api.get('/lessons/all-lessons', {
      headers: {
        Authorization: token?.token
      }
    });
    lessons = lessonsRes?.data?.payload;
  } catch (error) {
    console.log(error);
  } 
  console.log(lessons);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Lessons</h1>
        <p className="text-base-content/70 mt-1">
          Review, feature and manage all lessons created by users.
        </p>
      </div>

      <ManageLessonsStats /> 

      <ManageLessonsTable token={token} lessons={lessons} />
    </div>
  );
}
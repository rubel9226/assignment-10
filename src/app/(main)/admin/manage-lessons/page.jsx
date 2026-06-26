import { auth } from "@/lib/auth";
import ManageLessonsFilters from "./Components/ManageLessonsFilters";
import ManageLessonsStats from "./Components/ManageLessonsStats";
import ManageLessonsTable from "./Components/ManageLessonsTable";
import { headers } from "next/headers";
import { api } from "@/lib/baseAPI";



export default async function ManageLessonsPage() {
  let token = '';
  let lessonsStats = {};
  try {
    token = await auth.api.getToken({
        headers: await headers ()
    });
    const res = await api.get('/admins/lessons-stats', {
      headers: {
        Authorization: token?.token
      }
    });
    lessonsStats = res?.data?.payload

  } catch (error) {
    console.log(error);
  } 
  return (
    <div className="space-y-6 container mx-auto  mt-2 md:mt-8">
      <div>
        <h1 className="text-3xl font-bold">Manage Lessons</h1>
        <p className="text-base-content/70 mt-1">
          Review, feature and manage all lessons created by users.
        </p>
      </div>

      <ManageLessonsStats lessonsStats={lessonsStats} /> 

      <ManageLessonsTable token={token} />
    </div>
  );
}
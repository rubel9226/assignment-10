import { api } from "@/lib/baseAPI";
import DashboardStats from "./Components/DashboardStats";
import LessonGrowthChart from "./Components/LessonGrowthChart";
import MostActiveContributors from "./Components/MostActiveContributors";
import TodayLessonsCard from "./Components/TodayLessonsCard";
import UserGrowthChart from "./Components/UserGrowthChart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export default async function AdminDashboardHome() {
  let adminStats = {};
  let contributors = [];
  let userGrowth = [];
  let lessonGrowth = [];
  try {
    const token = await auth.api.getToken({
        headers: await headers ()
    });
    const statsRes = await api.get('/admins/user-stats', {
      headers: {
        Authorization: token.token,
      }
    });
    const userGrowthRes = await api.get('/admins/user-growth', {
      headers: {
        Authorization: token.token,
      }
    });
    const lessonGrowthRes = await api.get('/admins/lessons-growth', {
      headers: {
        Authorization: token.token,
      }
    });

    const contributorsRes = await api.get('/admins/top-contributors');
    adminStats = statsRes?.data?.payload;
    contributors = contributorsRes?.data?.payload;
    userGrowth = userGrowthRes?.data?.payload;
    lessonGrowth = lessonGrowthRes?.data?.payload;
  } catch (error) {
    console.log(error);
  } 

  return (
    <div className="space-y-6 container mx-auto mt-4">
      <DashboardStats stats={adminStats} />

      <div className="grid lg:grid-cols-2 gap-6">
        <UserGrowthChart data={userGrowth} />
        <LessonGrowthChart lessonGrowth={lessonGrowth} />
      </div>

      <TodayLessonsCard todayLessons={adminStats?.todayLessons} />

      <MostActiveContributors contributors={contributors} />
    </div>
  );
}
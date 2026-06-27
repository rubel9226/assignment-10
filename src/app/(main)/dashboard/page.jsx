import { api } from "@/lib/baseAPI";
import AnalyticsChart from "./Components/AnalyticsChart";
import DashboardStats from "./Components/DashboardStats";
import QuickActions from "./Components/QuickActions";
import RecentLessons from "./Components/RecentLessons";
import WelcomeBanner from "./Components/WelcomeBanner";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardHome() { 
    let stats = {};
    let lessons = [];
    let weeklyChart = [];
    try {
        const token = await auth.api.getToken({
            headers: await headers ()
        });  
        const res = await api.get('/users/stats', {
            headers: {
              Authorization: token?.token,
            }
        });
        const resLessons = await api.get( "/lessons/recent-lessons", {
           headers: {
             Authorization: token?.token,
           }
         });
        const resChart = await api.get( "/users/weekly-chart", {
           headers: {
             Authorization: token?.token,
           }
         });
        stats = res?.data?.payload;
        lessons = resLessons?.data?.payload;
        weeklyChart = resChart?.data?.payload;
    } catch (error) {
      console.log(error);  
    } 
    console.log(lessons)
  return (
    <div className="space-y-8 container mx-auto mt-4 md:mt-8">
      <WelcomeBanner />
      <DashboardStats stats={stats} />
      <QuickActions />
      <AnalyticsChart data={weeklyChart} />
      <RecentLessons lessons={lessons} />
    </div>
  );
}
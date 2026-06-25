import { FaUsers, FaFlag  } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";


import StatsCard from "./StatsCard";

export default function DashboardStats({stats}) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 ">
      <StatsCard
        title="Total Users"
        value={stats?.totalUser}
        icon={<FaUsers size={24} />}
      />

      <StatsCard
        title="Public Lessons"
        value={stats?.totalLessons}
        icon={<FaBookOpen size={24} />}
      />

      <StatsCard
        title="Reported Lessons"
        value={stats?.totalReports}
        icon={<FaFlag size={24} />}
      />
    </div>
  );
}
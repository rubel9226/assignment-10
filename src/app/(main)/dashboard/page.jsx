import AnalyticsChart from "./Components/AnalyticsChart";
import DashboardStats from "./Components/DashboardStats";
import QuickActions from "./Components/QuickActions";
import RecentLessons from "./Components/RecentLessons";
import WelcomeBanner from "./Components/WelcomeBanner";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <DashboardStats />
      <QuickActions />
      <AnalyticsChart />
      <RecentLessons />
    </div>
  );
}
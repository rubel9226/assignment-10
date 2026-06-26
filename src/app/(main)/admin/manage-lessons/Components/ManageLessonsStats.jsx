import { FaBookOpen } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";

export default function ManageLessonsStats({lessonsStats}) {
  console.log(lessonsStats, 'lessons stats');
  const stats = [
    {
      title: "Public Lessons",
      value: lessonsStats?.totalPublicLessons,
      icon: <FaBookOpen size={22} />,
    },
    {
      title: "Private Lessons",
      value: lessonsStats?.totalPrivateLessons,
      icon: <IoEye size={22} />,
    },
    {
      title: "Reported Content",
      value: lessonsStats?.totalReports,
      icon: <FaFlag size={22} />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.title}
          className="card bg-base-100 border border-base-300 shadow-sm"
        >
          <div className="card-body">
            <div className="flex items-center justify-between">
              {item.icon}
              <span className="text-3xl font-bold">{item.value}</span>
            </div>

            <h3 className="font-semibold mt-3">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
export default function TodayLessonsCard({todayLessons}) {
  return (
    <div className="bg-[#1D232A] rounded-3xl p-6">
      <h2 className="text-xl font-semibold">
        Today's New Lessons
      </h2>

      <p className="text-6xl font-bold mt-4">
        {todayLessons ? todayLessons : 0}
      </p>

      <p className="text-gray-500 mt-2">
        Lessons published today
      </p>
    </div>
  );
}
export default function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="rounded-3xl p-6 bg-[#1D232A]">
      <div className="flex justify-between items-center">
        <h3 className="text-white">
          {title}
        </h3>

        {icon}
      </div>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}
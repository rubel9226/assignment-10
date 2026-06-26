export default function ProfileStatCard({
  title,
  value,
}) {
  return (
    <div className="bg-base-100 rounded-xl p-6 text-center">

      <h3 className="text-base-content/60 text-sm">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}
import GlassCard from "../ui/GlassCard";

const stats = [
  {
    value: "50K+",
    label: "Lessons Shared",
  },
  {
    value: "10K+",
    label: "Active Authors",
  },
  {
    value: "1.2M",
    label: "Monthly Readers",
  },
  {
    value: "180+",
    label: "Countries",
  },
];

export default function StatsSection() {
  return (
    <section className="-mt-16 relative z-10 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <GlassCard
            key={item.label}
            className="p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-indigo-300">
              {item.value}
            </h3>

            <p className="text-sm text-slate-400">
              {item.label}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
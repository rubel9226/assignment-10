export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
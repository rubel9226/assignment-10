import Link from "next/link";
import { BiLock } from "react-icons/bi";

export default function PremiumLessonCard() {
  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 min-h-[280px] overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md bg-black/50 flex flex-col items-center justify-center">
        <BiLock size={50} />

        <h3 className="text-xl font-semibold mt-4">
          Premium Insight
        </h3>

        <Link href={'/dashboard/plans/pricing'} className="mt-4 px-5 py-3 bg-indigo-500 rounded-lg">
          Upgrade to View
        </Link>
      </div>
    </div>
  );
}
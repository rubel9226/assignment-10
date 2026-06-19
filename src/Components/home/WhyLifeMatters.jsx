// import {
//   Brain,
//   Users,
//   Sparkles,
//   BadgeCheck,
// } from "lucide-react";

import { FaBrain, FaUserShield } from "react-icons/fa";
import { HiBadgeCheck, HiSparkles } from "react-icons/hi";

const benefits = [
  {
    icon: FaBrain,
    title: "Mental Resilience",
    description:
      "Transform experiences into frameworks that help you navigate future challenges.",
  },
  {
    icon: FaUserShield,
    title: "Community Growth",
    description:
      "Your lessons can become someone else's breakthrough.",
  },
  {
    icon: HiSparkles,
    title: "Legacy Building",
    description:
      "Create a lasting record of your wisdom and growth.",
  },
  {
    icon: HiBadgeCheck,
    title: "Verified Wisdom",
    description:
      "Structured lessons help preserve authentic experiences.",
  },
];

export default function WhyLifeMatters() {
  return (
    <section className="py-24 bg-slate-900/40">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Learning From Life Matters
          </h2>

          <p className="text-slate-400 mt-4">
            Turn experiences into knowledge that lasts.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-900 border border-white/10 rounded-3xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto">
                  <Icon className="text-indigo-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
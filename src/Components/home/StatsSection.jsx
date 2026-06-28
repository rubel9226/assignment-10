"use client";

import { motion } from "motion/react";
import GlassCard from "@/Components/ui/GlassCard";
import { container, item } from "@/Components/ui/Motion";

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
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="-mt-16 relative z-10 container mx-auto px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <GlassCard className="p-6 text-center">
              <h3 className="text-3xl font-bold text-indigo-300">
                {stat.value}
              </h3>

              <p className="text-sm text-slate-400">
                {stat.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
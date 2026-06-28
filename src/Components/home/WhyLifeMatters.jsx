"use client";

import { motion } from "motion/react";
import { container, item } from "@/Components/ui/Motion";

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
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 bg-slate-900/40"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Why Learning From Life Matters
          </h2>

          <p className="text-slate-400 mt-4">
            Turn experiences into knowledge that lasts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="bg-slate-900 border border-white/10 rounded-3xl p-6 text-center cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto"
                >
                  <Icon className="text-3xl text-indigo-400" />
                </motion.div>

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
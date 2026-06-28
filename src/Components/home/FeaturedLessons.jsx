"use client";

import { motion } from "motion/react";
import { container, item } from "@/Components/ui/Motion";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedLessons({ lessons }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto px-4 py-24"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Curated Insights
        </h2>

        <p className="text-slate-400 mt-3">
          Hand-picked life lessons from our community.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson._id}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="p-6">
              <span className="text-indigo-400 text-sm whitespace-nowrap">
                {lesson.category}
              </span>

              <h3 className="text-xl font-semibold mt-3 truncate">
                {lesson.title}
              </h3>

              <p className="text-slate-400 mt-3 truncate">
                {lesson.description.slice(0, 60)}...
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500 truncate">
                  {lesson.creatorName}
                </span>

                <Link
                  href={`/dashboard/lessons-details/${lesson._id}`}
                  className="text-indigo-400 whitespace-nowrap"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
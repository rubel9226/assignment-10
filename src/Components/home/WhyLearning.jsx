"use client";

import { motion } from "motion/react";
import { container, item } from "../ui/Motion";

export default function WhyLearning() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {[1, 2, 3, 4].map((card) => (
        <motion.div
          key={card}
          variants={item}
          whileHover={{
            scale: 1.05,
          }}
          className="rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold">
            Title
          </h3>

          <p>
            Description...
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
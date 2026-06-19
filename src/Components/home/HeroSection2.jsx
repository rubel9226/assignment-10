"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    badge: "Featured Narrative",
    title: "Architecting Wisdom in the Age of Noise",
    description:
      "Transform your lived experiences into structured digital artifacts of wisdom.",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    badge: "Personal Growth",
    title: "Every Experience Holds a Lesson",
    description:
      "Capture your reflections and turn them into valuable insights.",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    badge: "Community Wisdom",
    title: "Learn From Real Human Experiences",
    description:
      "Explore lessons shared by people around the world.",
  },
];

export default function HeroSection() {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />

              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="max-w-3xl">
                  <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {slide.badge}
                  </span>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
                    {slide.title}
                  </h1>

                  <p className="text-slate-300 text-lg mt-6 max-w-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
                      Start Writing
                    </button>

                    <button className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md">
                      Explore Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
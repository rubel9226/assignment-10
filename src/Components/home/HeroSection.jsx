"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSection() {
const slides = [
    {
        image: "https://res.cloudinary.com/ddryxwdtj/image/upload/v1781833477/unnamed_ghejvc.png",
        badge: "Featured Narrative",
        title: "Architecting Wisdom in the Age of Noise.",
        description: "Transform your lived experiences into structured digital artifacts of wisdom.",
    },
    {
        image: "https://i.pinimg.com/1200x/b9/f9/26/b9f92639baf6500c938cc9073c5fb09a.jpg",
        badge: "Personal Growth",
        title: "Lessons That Shape a Better Future.",
        description: "Preserve experiences, reflections, and personal growth insights.",
    },
    {
        image: "https://i.pinimg.com/736x/02/db/af/02dbafe3024274701fa366186b1f07a3.jpg",
        badge: "Community Wisdom",
        title: "Learn From The Journey Of Others.",
        description: "Discover powerful life lessons shared by people around the world.",
    },
    ];



    return (
        <section className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000, // 3 second por slide change hobe
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }} 
            >  
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-cover bg-center flex "
                                style={{
                                    backgroundImage:
                                        `url('${slide.image}')`,
                                    }}
                            > 
                                <div className="flex items-center text-neutral-content container mx-auto px-4">
                                    <div className="max-w-md space-y-2 md:max-w-lg md:space-y-4 lg:max-w-3xl lg:space-y-6 xl:max-w-5xl xl:space-y-8 ">
                                        <div className="badge badge-soft badge-accent text-whte">
                                            {slide.badge}
                                        </div>

                                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold xl:font-extrabold">
                                            {slide.title}
                                        </h1>
                                        <p className="mb-5 text-base md:text-md lg:text-lg text-white/70">
                                            {slide.description}
                                        </p>
                                        
                                        <div className="flex-col gap-4 md:flex-row md:gap-5 inline-flex">
                                            <button className="btn bg-[#C2C0FF] text-[#0D0096] rounded-lg border-none">
                                                Start Writing Lessons
                                            </button>
                                            <button className="btn bg-[#061B2D]/80 text-white/80 rounded-lg ">
                                                Explore Community
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </SwiperSlide> 
                    ))
                }

            </Swiper>
        </section>
    );
}
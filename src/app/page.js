import CTASection from "@/Components/home/CTASection";
import StatsSection from "@/Components/home/StatsSection";
import FeaturedLessons from "@/Components/home/FeaturedLessons";
import HeroSection from "@/Components/home/HeroSection";
import TopContributors from "@/Components/home/TopContributors";
import WhyLifeMatters from "@/Components/home/WhyLifeMatters";
import Navbar from "@/Components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedLessons />
        <WhyLifeMatters />
        <TopContributors />
        <CTASection />
      </main>
  );
}

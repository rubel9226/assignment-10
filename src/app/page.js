import CTASection from "@/Components/home/CTASection";
import StatsSection from "@/Components/home/StatsSection";
import FeaturedLessons from "@/Components/home/FeaturedLessons";
import HeroSection from "@/Components/home/HeroSection";
import TopContributors from "@/Components/home/TopContributors";
import WhyLifeMatters from "@/Components/home/WhyLifeMatters";
import Navbar from "@/Components/layout/Navbar";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { api } from "@/lib/baseAPI";

export default async function Home() {
  let contributors = [];
  let featuredLessons = [];
  try {  
    const contributorsRes = await api.get('/admins/top-contributors');
    const featuredRes = await api.get('/lessons/featured-lessons');
    contributors = contributorsRes?.data?.payload;
    featuredLessons = featuredRes?.data?.payload;
  } catch (error) {
    console.log(error);
  }

  console.log(featuredLessons, 'contributors');
  return (
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedLessons lessons={featuredLessons} />
        <WhyLifeMatters />
        <TopContributors contributors={contributors} />
        <CTASection />
      </main>
  );
}

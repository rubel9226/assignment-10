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
  try {  
    const contributorsRes = await api.get('/admins/top-contributors');
    contributors = contributorsRes?.data?.payload;
  } catch (error) {
    console.log(error);
  }

  console.log(contributors, 'contributors');
  return (
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedLessons />
        <WhyLifeMatters />
        <TopContributors contributors={contributors} />
        <CTASection />
      </main>
  );
}

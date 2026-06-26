
import CTASection from "@/Components/home/CTASection";
import FeaturedLessons from "@/Components/home/FeaturedLessons";
import HeroSection from "@/Components/home/HeroSection";
import StatsSection from "@/Components/home/StatsSection";
import TopContributors from "@/Components/home/TopContributors";
import WhyLifeMatters from "@/Components/home/WhyLifeMatters";
import Navbar from "@/Components/layout/Navbar";
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
  return (
      <main>
        <Navbar />
        <HeroSection />
        <StatsSection />
        <FeaturedLessons lessons={featuredLessons} />
        <WhyLifeMatters />
        <TopContributors contributors={contributors} />
        <CTASection />
      </main>
  );
}

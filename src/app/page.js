import CTASection from "@/Components/home/CTASection";
import StatsSection from "@/Components/home/StatsSection";
import FeaturedLessons from "@/Components/home/FeaturedLessons";
import HeroSection from "@/Components/home/HeroSection";
import TopContributors from "@/Components/home/TopContributors";
import WhyLifeMatters from "@/Components/home/WhyLifeMatters";
import Navbar from "@/Components/layout/Navbar";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default async function Home() {

  const { data, error } = await authClient.token()
  if (error) {
    console.log(error);
  }
  if (data) {
    const jwtToken = data.token
    consol.log(jwtToken);

    // Use this token for authenticated requests to external services
  }
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

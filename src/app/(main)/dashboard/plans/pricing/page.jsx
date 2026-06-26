import FAQ from "./Components/FAQ";
import PlanComparisonTable from "./Components/PlanComparisonTable";
import PremiumFeatures from "./Components/PremiumFeatures";
import PremiumPriceCard from "./Components/PremiumPriceCard";
import PricingHero from "./Components/PricingHero";


export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 space-y-16">
      <PricingHero />
      <PremiumPriceCard />
      <PlanComparisonTable />
      <PremiumFeatures />
      <FAQ />
    </div>
  );
}
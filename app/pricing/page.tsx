import PricingHero from "@/components/pricing/sections/PricingHero";
import ZeroCommission from "@/components/pricing/sections/ZeroCommission";
import NoFeesGrid from "@/components/pricing/sections/NoFeesGrid";
import PaymentCycle from "@/components/pricing/sections/PaymentCycle";
import ShippingFacts from "@/components/pricing/sections/ShippingFacts";
import FinalCTA from "@/components/pricing/sections/FinalCTA";
import Benifits from "@/components/pricing/sections/Benifits";

import BenefitsMarquee from "@/components/common/BenefitsMarquee";
import benefits from "@/content/settings/benefits.json";



export default function PricingPage() {
  return (
    <>
      <BenefitsMarquee items={benefits.sellerBenefits} />
      <PricingHero />
      <ZeroCommission />
      <NoFeesGrid />
      <PaymentCycle />
      <Benifits />
      <FinalCTA />
    </>
  );
}

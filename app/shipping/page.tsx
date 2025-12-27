"use client";

/* IMPORT ALL SECTIONS */
import ShippingHero from "@/components/shipping/ShippingHero";
import ShippingBanner from "@/components/shipping/ShippingBanner";
import ShippingFinalCTA from "@/components/shipping/ShippingFinalCTA";
import QuickFacts from "@/components/shipping/QuickFacts";
import ShippingDetails from "@/components/shipping/ShippingDetails";
import ShippingPolicies from "@/components/shipping/ShippingPolicies";

import BenefitsMarquee from "@/components/common/BenefitsMarquee";
import benefits from "@/content/settings/benefits.json";

/* OPTIONAL (if you created them) */
// import QuickFacts from "@/components/shipping/QuickFacts";
// import ShippingTimeline from "@/components/shipping/ShippingTimeline";
// import ReturnPolicy from ".@/components/shipping/ReturnPolicy";

export default function ShippingPage() {
  return (
    <>
    
      <BenefitsMarquee items={benefits.sellerBenefits} />
      <ShippingHero />
      <ShippingBanner />
      <ShippingDetails/>
      <QuickFacts />
      <ShippingPolicies />
      <ShippingFinalCTA />
      
    </>
  );
}

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
      {/* SECTION 1: HERO */}
            <BenefitsMarquee items={benefits.sellerBenefits} />
      
      <ShippingHero />

      {/* SECTION 2: BANNER + HIGHLIGHTS */}
      <ShippingBanner />

 
     <QuickFacts />

      {/* SECTION 4: HOW SHIPPING WORKS */}
      
      <ShippingDetails/>
      <ShippingPolicies />

      {/* SECTION 5: TIMELINE */}
      {/* <ShippingTimeline /> */}

      {/* SECTION 6: RETURNS & CANCELLATIONS */}
      {/* <ReturnPolicy /> */}

      {/* SECTION 7: FINAL CTA */}
      <ShippingFinalCTA />
    </>
  );
}

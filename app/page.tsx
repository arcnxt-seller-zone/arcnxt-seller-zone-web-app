import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import SellerSupport from "@/components/home/SellerSupport";
import GrowBusiness from "@/components/home/GrowBusiness";
import LearningHub from "@/components/home/LearningZone"
import HowItWorks from "@/components/home/HowItWorks"
import Testimonials from "@/components/home/Testimonials"
import Rewards from "@/components/home/Rewards"
import WhySellersLove from "@/components/home/WhySellersLove"

import BenefitsMarquee from "@/components/common/BenefitsMarquee";
import benefits from "@/content/settings/benefits.json";


export default function HomePage() {
  return (
    <>
      <BenefitsMarquee items={benefits.sellerBenefits} />
      <Hero />
      <Stats/>
      <WhySellersLove/>
      <Rewards />
      <Testimonials/>
      <HowItWorks />
      <LearningHub />
      <GrowBusiness />
      <SellerSupport />
    </>
  );
}

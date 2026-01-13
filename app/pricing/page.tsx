import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';
import { HeroHeader } from '@/components/header';
import Pricing from '@/components/pricing';
import PricingComparator from '@/components/pricing-comparator';

export default function PricingPage() {
  return (
    <>
      <HeroHeader />
      <Pricing />
      <hr className="border-dashed" />
      <PricingComparator />
      <CallToAction />
      <Footer />
    </>
  );
}

import AIFeatures from '@/components/AIFeatures';
import AiMarketing from '@/components/AiMarketing';
import CTA from '@/components/CTA';
import { Enterprises } from '@/components/Enterprises';
import Faq from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Insight from '@/components/Insight';
import Integrations from '@/components/Integrations';
import Plans from '@/components/Plans';
import Pricing from '@/components/Pricing';
import Slider from '@/components/Slider';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col gap-0 sm:gap-2 md:gap-4">
        <Hero />
        <Enterprises />
        <Integrations />
        <Insight />
        <Slider />
        <AiMarketing />
        <Plans />
        <Faq />
        <Testimonials />

        {/* <Features /> */}
        {/* <AIFeatures />
        <Pricing />
        <FAQ />
        <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}

import { About } from '@/components/landing/About';
import { Cta } from '@/components/landing/Cta';
import { FAQ } from '@/components/landing/FAQ';
import { Features } from '@/components/landing/Features';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Newsletter } from '@/components/landing/Newsletter';
import { Pricing } from '@/components/landing/Pricing';
import { Services } from '@/components/landing/Services';
import { Awards } from '@/components/landing/Awards';
import { Team } from '@/components/landing/Team';
import { Testimonials } from '@/components/landing/Testimonials';

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <Awards />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
    </div>
  );
}

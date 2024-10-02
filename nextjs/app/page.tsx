import { About } from '@/components/landing/About';
import { FAQ } from '@/components/landing/FAQ';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Awards } from '@/components/landing/Awards';
import Image from 'next/image';
import { BentoGridDemo } from '@/components/landing/BentoImages';
export default async function HomePage() {
  return (
    <div>
      <div className="justify-center pt-10 flex space-x-5">
        <a
          rel="noreferrer noopener"
          href=""
          className="opacity-60 hover:opacity-100"
        >
          <Image
            src="/landing/telegramlogo.svg"
            width="50"
            height="50"
            alt="Telegram logo"
          />
        </a>

        <a
          rel="noreferrer noopener"
          href=""
          className="opacity-60 hover:opacity-100"
        >
          <Image src="/landing/xlogo.svg" width="50" height="50" alt="X logo" />
        </a>
        <a
          rel="noreferrer noopener"
          href=""
          className="opacity-60 hover:opacity-100"
        >
          <Image
            src="/landing/dexscreener.svg"
            width="50"
            height="50"
            alt="Dexscreener logo"
          />
        </a>
      </div>
      <Hero />
      <About />
      <HowItWorks />
      <FAQ />
      <BentoGridDemo />
    </div>
  );
}

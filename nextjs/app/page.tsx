import { About } from '@/components/landing/About';
import { FAQ } from '@/components/landing/FAQ';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Awards } from '@/components/landing/Awards';
import Image from 'next/image';
export default async function HomePage() {
  return (
    <div>
      <div className="justify-center pt-10 flex space-x-5">
        <a
          rel="noreferrer noopener"
          href="https://t.me/omochis"
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
          href="https://x.com/omochi_cto"
          className="opacity-60 hover:opacity-100"
        >
          <Image src="/landing/xlogo.svg" width="50" height="50" alt="X logo" />
        </a>
        <a
          rel="noreferrer noopener"
          href="https://dexscreener.com/solana/3krc5n9jsrzq6m2d4fkh5jhcrsvxfrxfmdaw6fchpqkh"
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
      <Awards />
      <About />
      <HowItWorks />
      <FAQ />
    </div>
  );
}

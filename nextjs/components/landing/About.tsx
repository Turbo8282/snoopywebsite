'use client';
import { Statistics } from '@/components/landing/Statistics';
import Image from 'next/image';
export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-6 md:py-12">
        <div className="px-4 md:px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src="/landing/omochipfp.jpg"
            height="300"
            width="300"
            alt="omochi pfp"
          />
          <div className="bg-green-0 flex flex-col justify-between w-full md:w-4/6">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#81503f]">ABOUT OMOCHI</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mt-4">
                Omochi is the viral Tiktok frog coin on Solana. It first
                skyrocketed to success due to the virality of the original
                Tiktoker @tomoflys cute videos of Omochi. On 26th September
                2024, the memecoin was made and it reached an astounding all
                time high of ~30M market capitalisation within 24 hours,
                trending on X and DexScreener. After the original developer
                decided to leave OMOCHI, the community historically took the
                initiative to takeover the memecoin after their absence. Now,
                the memecoin is aspiring to reach new heights with its based
                community.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

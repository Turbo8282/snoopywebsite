'use client';
import { Button } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { useState } from 'react';
import Image from 'next/image';
export const Hero = () => {
  const [buttonText, setButtonText] = useState('Copy address');

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('ESVRQ6phc55VCw7sWB6JgW3PeTB6N68kvwjfsMPcpump')
      .then(() => {
        // Change the button text to "Copied"
        setButtonText('Copied');

        // After 2 seconds, revert the button text back to "Copy address"
        setTimeout(() => {
          setButtonText('Copy address');
        }, 700); // 2000ms = 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <Image
            src="/landing/omochitransparent.png"
            width="300"
            height="300"
            alt="Omochi cartoon"
          />
          <h1 className="inline">
            <span className="inline text-[#81503f]">$OMOCHI</span>{' '}
            <span className="inline text-[#F4A623]">COIN</span>{' '}
          </h1>{' '}
          <h2></h2>
        </main>

        <p className="text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The number one frog coin on Solana. Made by the omochi community, for
          the community.
        </p>

        <div className="space-y-4 md:space-y-0 space-x-4">
          <Button className="w-2/5 md:w-1/3">
            <a
              href="https://jup.ag/swap/SOL-ESVRQ6phc55VCw7sWB6JgW3PeTB6N68kvwjfsMPcpump"
              target="_blank"
            >
              Buy $OMOCHI
            </a>
          </Button>
          <Button
            className="w-2/5 md:w-1/3"
            variant="outline"
            onClick={copyToClipboard}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};

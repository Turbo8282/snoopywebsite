'use client';
import { Button } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { useState } from 'react';
import Image from 'next/image';
export const Hero = () => {
  const [buttonText, setButtonText] = useState('Copy address');

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('troll')
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
    <section className="container place-items-center py-16 md:py-20 gap-10">
      <div className="text-center space-y-6">
        <main className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <div className="flex justify-center">
            <Image
              src="/landing/snoopytransparent.png"
              width="400"
              height="400"
              alt="Transparent snoopy"
            />
          </div>
          <h1 className="inline">
            <span className="inline text-[#a156ff]">$SNOOPY</span>{' '}
            <span className="inline text-[#F4A623]">COIN</span>{' '}
            <p className="text-lg md:text-xl text-muted-foreground lg:mx-0">
              Snoopy coin on Solana.
            </p>
          </h1>{' '}
          <h2></h2>
        </main>

        <div className="space-y-4 md:space-y-0 space-x-4 w-4/5 md:w-1/2 mx-auto">
          <Button className="w-2/5 md:w-1/3">
            <a href="" target="_blank">
              Buy $SNOOPY
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
      {/* <div className="z-10">
        <HeroCards />
      </div> */}
    </section>
  );
};

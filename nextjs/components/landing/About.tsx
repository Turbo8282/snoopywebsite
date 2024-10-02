'use client';
import { Statistics } from '@/components/landing/Statistics';
import Image from 'next/image';
import Lottie from 'lottie-react';
import animationSnoopy from '@/public/landing/animationSnoopy.json';
export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-6 md:py-12">
        <div className="px-4 md:px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <Image
            src="/landing/omochipfp.jpg"
            height="300"
            width="300"
            alt="omochi pfp"
          /> */}
          <Lottie className="w-80 h-80" animationData={animationSnoopy} />
          <div className="bg-green-0 flex flex-col justify-between w-full md:w-4/6">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#a156ff]">ABOUT SNOOPY</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt repellat repellendus beatae ab saepe provident rem,
                obcaecati distinctio corporis veritatis, cum consequatur
                praesentium fugit dolorum nostrum unde enim natus assumenda!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                laudantium. Omnis expedita possimus ea quidem neque inventore
                quaerat rem quasi laudantium doloribus, pariatur id explicabo
                totam libero earum deleniti repudiandae.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

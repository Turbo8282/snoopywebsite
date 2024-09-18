'use client';
import { Statistics } from '@/components/landing/Statistics';
import Lottie from 'lottie-react';
import analyticsHubAnimation from '@/public/landing/analyticsHub.json';

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-6 md:py-12">
        <div className="px-4 md:px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Lottie
            animationData={analyticsHubAnimation}
            className="w-full md:w-2/6 h-auto" // Adjust Lottie size to cover half
          />
          <div className="bg-green-0 flex flex-col justify-between w-full md:w-4/6">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{' '}
                </span>
                AIMS
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mt-4">
                AIMS Financial Group (AIMS) is a diversified financial services
                and investment group active in the areas of funds management,
                mortgage lending, investment banking and property investment.
                AIMS is also the owner of the Sydney Stock Exchange. Since 1991,
                AIMS has raised approximately A$4.0 billion in funds from the
                capital markets. Of this, AIMS has issued approximately A$3.0
                billion in residential mortgage-based securities, with most of
                them rated AAA by both Standard & Poors and Fitch Ratings, and
                has originated over A$9.0 billion mortgage since 1991.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

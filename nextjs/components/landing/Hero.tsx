'use client';
import { Button } from '@/components/ui/button';
import { HeroCards } from './HeroCards';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="inline">
            CAPITALISE YOUR{' '}
            <span className="inline bg-gradient-to-r from-[#F9D423] via-[#F4A623] to-[#D4AF37] text-transparent bg-clip-text">
              WEALTH
            </span>{' '}
          </h1>{' '}
          <h2>
            WITH{' '}
            <span className="inline bg-gradient-to-r from-[#1D2B64]  to-[#8A4FFF] text-transparent bg-clip-text">
              AIMS
            </span>{' '}
          </h2>
        </main>

        <p className="text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Grow your portfolio effortlessly by investing in AIMS' diversified
          funds or borrowing from our range of loan options.
        </p>

        <div className="space-y-4 md:space-y-0 space-x-4">
          <Button className="w-2/5 md:w-1/3">Invest</Button>
          <Button className="w-2/5 md:w-1/3" variant="outline">
            Borrow
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

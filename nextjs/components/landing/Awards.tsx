'use client';
import { Radar } from 'lucide-react';

interface AwardsProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: AwardsProps[] = [
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 1'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 2'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 3'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 4'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 5'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 6'
  }
];

export const Awards = () => {
  return (
    <section id="sponsors" className="container pt-12 md:pt-24 sm:py-32">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-primary">
        Our Awards
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: AwardsProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

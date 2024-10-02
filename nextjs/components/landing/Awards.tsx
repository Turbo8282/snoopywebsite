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
    <section id="sponsors" className="container">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Omochi is a community
      </h2>
    </section>
  );
};

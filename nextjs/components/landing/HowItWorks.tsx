'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MedalIcon,
  MapIcon,
  PlaneIcon,
  GiftIcon
} from '@/components/landing/Icons';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: '1. Create Wallet',
    description:
      'Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.'
  },
  {
    icon: <MapIcon />,
    title: '2. Get SOL',
    description:
      'Have SOL in your wallet to switch to $SNOOPY. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.'
  },
  {
    icon: <PlaneIcon />,
    title: '3. Go to Jupiter',
    description:
      'Connect to Jupiter. Connect your wallet in chrome. Paste the $SNOOPY token address, select $SNOOPY, and confirm. When Phantom prompts you for a wallet signature, sign.'
  },
  {
    icon: <GiftIcon />,
    title: '4. Swap for Snoopy',
    description: 'Switch SOL for $SNOOPY.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How To <span className="text-[#F4A623]">Buy </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Easy and fast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 transform hover:scale-110 transition duration-300 ease-in-out hover:cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

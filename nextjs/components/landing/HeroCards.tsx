'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Check, Linkedin } from 'lucide-react';
import { LightBulbIcon } from '@/components/landing/Icons';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Lottie from 'lottie-react';
import floatingCoinAnimation from '@/public/landing/animationCoin.json';
import Image from 'next/image';
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Shadow effect */}
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg">Follow our X fan page</CardTitle>
            <CardDescription>@omochi_cto</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <a
            rel="noreferrer noopener"
            href="https://x.com/omochi_cto"
            className="opacity-60 hover:opacity-100 flex justify-center"
          >
            <Image
              src="/landing/xlogo.svg"
              width="50"
              height="50"
              alt="X logo"
            />
          </a>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          {/* <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          /> */}
          <Lottie
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
            animationData={floatingCoinAnimation}
          />
          <CardTitle className="text-center">DexScreener</CardTitle>
          <CardDescription className="font-normal text-primary">
            Analyse $OMOCHI chart
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
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
        </CardContent>

        <CardFooter>
          <div></div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Telegram
            <Badge variant="secondary" className="text-sm text-primary">
              Community
            </Badge>
          </CardTitle>

          <CardDescription>
            Raid and chat with thousands of other Omochi fans on our English
            telegram.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
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
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            <div>
              <span className="">
                <a
                  rel="noreferrer noopener"
                  href="https://t.me/Omochi_china"
                  className="opacity-60 hover:opacity-100"
                >
                  Or join our Chinese Telegram
                </a>
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[80px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Live for trading</CardTitle>
            <CardDescription className="text-md mt-2">
              Omochi was made on the 26th September 2024. You can buy the coin
              on Jupiter, Raydium and a few other CEX.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

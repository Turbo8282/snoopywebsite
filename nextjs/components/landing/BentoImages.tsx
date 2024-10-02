import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from '@tabler/icons-react';
import Image from 'next/image';

export function BentoGridDemo() {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Gallery
      </h1>
      <BentoGrid className="grid grid-cols-2 gap-4 mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={'md:col-span-1'}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

interface SkeletonProps {
  imageNumber: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ imageNumber }) => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image
      src={`/snoopy/${imageNumber}.png`}
      layout="fill"
      objectFit="cover"
      alt={`Snoopy image ${imageNumber}`}
    />
  </div>
);
const items = [
  {
    header: <Skeleton imageNumber={1} />
  },
  {
    header: <Skeleton imageNumber={2} />
  },
  {
    header: <Skeleton imageNumber={3} />
  },
  {
    header: <Skeleton imageNumber={4} />
  },
  {
    header: <Skeleton imageNumber={5} />
  },
  {
    header: <Skeleton imageNumber={6} />
  },
  {
    header: <Skeleton imageNumber={7} />
  },
  {
    header: <Skeleton imageNumber={8} />
  },
  {
    header: <Skeleton imageNumber={9} />
  },
  {
    header: <Skeleton imageNumber={10} />
  }
];

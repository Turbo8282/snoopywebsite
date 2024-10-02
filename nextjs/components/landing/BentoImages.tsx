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

export function BentoGridDemo() {
  return (
    <BentoGrid className="grid grid-cols-2 gap-4 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={'md:col-span-3'}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  },
  {
    header: <Skeleton />
  }
];

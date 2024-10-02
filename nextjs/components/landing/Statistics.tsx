'use client';
export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: '$30M',
      description: 'All Time High'
    },
    {
      quantity: '1400',
      description: 'Telegram Fans'
    },
    {
      quantity: '900',
      description: 'X Followers'
    },
    {
      quantity: '200',
      description: 'Dub Followers'
    }
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">
              {quantity}
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

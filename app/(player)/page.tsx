'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { usePlayers } from '@/hooks';
import { Player } from '@/schema/player';
import { Button } from '@/components/ui';
import { PlayersSection, Header } from '@/components/organism';

export default function Home() {
  const { add, players, remove } = usePlayers();

  return (
    <div className='bg-background'>
      <Header />
      <PlayersSection />
    </div>
  );
}

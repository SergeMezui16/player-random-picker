import { PlayerCard } from '../atom';
import { usePlayers } from '@/hooks';
import { DrawerDialog } from '../molecule';
import { ShuffleIcon } from 'lucide-react';
import { useState } from 'react';

export const ActionSection = () => {
  const [open, setOpen] = useState(false);
  const { players } = usePlayers();

  if (players.length < 2)
    return (
      <div className='container mx-auto my-4'>
        <p className='rounded border bg-card p-4 text-card-foreground'>
          Add more players to shuffle one of them.
        </p>
      </div>
    );

  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className='text-2xl'>Actions</h1>
      <div className='flex h-64 items-center gap-4 overflow-x-scroll'>
        <DrawerDialog
          open={open}
          onOpenChange={setOpen}
          trigger={
            <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
              <div className='flex size-32 items-center justify-center rounded border bg-primary/10'>
                <ShuffleIcon className='stroke-1' />
              </div>
              {"Shuffle a player"}
            </div>
          }
          title={"The selected player is :"}
          close={'Close'}
        >
          <PickPlayer />
        </DrawerDialog>
      </div>
    </div>
  );
};

const PickPlayer = () => {
  const { randomPick } = usePlayers();
  const player = randomPick();

  return <PlayerCard withDescription player={player} />;
};

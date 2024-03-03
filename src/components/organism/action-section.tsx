import { PlayerCard } from '../atom';
import { usePlayers } from '@/hooks';
import { DrawerDialog } from '../molecule';
import { PlusIcon } from 'lucide-react';

export const ActionSection = () => {
  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className='text-2xl'>Actions</h1>
      <div className='flex h-64 items-center gap-4 overflow-x-scroll'>
        <DrawerDialog
          open={false}
          trigger={
            <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
              <div className='flex size-32 items-center justify-center rounded border bg-primary/10'>
                <PlusIcon className='stroke-1' />
              </div>
              {"Choisir l'adversaire"}
            </div>
          }
          // title='Le joueur sélectioné est'
          //   description='Ajouter un nouveau joueur à votre team.'
          close={'Fermer'}
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

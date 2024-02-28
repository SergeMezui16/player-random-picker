import { useState } from 'react';
import { PlayerAvatar } from '../atom';
import { usePlayers } from '@/hooks';
import Link from 'next/link';
import { DrawerDialog } from '../molecule';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui';
import { cn } from '@/lib/cn';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Player } from '@/schema/player';
import { PlusIcon } from 'lucide-react';

export const PlayersSection = () => {
  const { players, count } = usePlayers();
  const [add, setAdd] = useState(false);

  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className='text-2xl'>Players ({count})</h1>
      <div className='flex h-64 items-center gap-4 overflow-x-scroll'>
        <DrawerDialog
          open={add}
          trigger={
            <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
              <div className='flex size-32 items-center justify-center rounded border bg-primary/10'>
                <PlusIcon className='stroke-1' />
              </div>
              Ajouter
            </div>
          }
          title='Ajouter un joueur'
          description='Ajouter un nouveau joueur à votre team.'
          close={'Fermer'}
        >
          <PlayerForm handleAfterSubmit={() => setAdd(false)} />
        </DrawerDialog>
        {[...players.reverse()].map((player) => (
          <PlayerAvatar player={player} key={player.id} />
        ))}
      </div>
    </div>
  );
};

function PlayerForm({
  className,
  handleAfterSubmit,
}: React.ComponentProps<'form'> & { handleAfterSubmit: () => void }) {
  const { add } = usePlayers();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Player>();

  const handleAdd: SubmitHandler<Player> = (data) => {
    try {
      add(data);
    } catch (err: any) {
      console.log(err.message);
      setError('name', { message: err.message });
    }
    handleAfterSubmit();
  };
  return (
    <form
      className={cn('grid items-start gap-4 p-4', className)}
      onSubmit={handleSubmit(handleAdd)}
    >
      <div className='grid gap-2'>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          {...register('name', {
            maxLength: {
              value: 10,
              message: 'This input exceed maxLength.',
            },
            required: {
              value: true,
              message: 'You should set at least a name.',
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='description'>Bio</Label>
        <Input
          id='description'
          defaultValue='La Malice'
          {...register('description')}
        />
      </div>
      <Button onClick={() => {}} type='submit'>
        Save
      </Button>
    </form>
  );
}

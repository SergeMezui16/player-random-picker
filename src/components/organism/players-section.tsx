import { PlayerAvatar } from '../atom';
import { usePlayers } from '@/hooks';
import { DrawerDialog } from '../molecule';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui';
import { cn } from '@/lib/cn';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Player } from '@/schema/player';
import { PlusIcon } from 'lucide-react';
import { ComponentProps, useState} from 'react';

export const PlayersSection = () => {
  const { players, count } = usePlayers();
  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className='text-2xl'>Players ({count})</h1>
      <div className='flex h-64 items-center gap-4 overflow-x-scroll'>
        <DrawerDialog
          open={open}
          onOpenChange={setOpen}
          trigger={
            <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
              <div className='flex size-32 items-center justify-center rounded border bg-primary/10'>
                <PlusIcon className='stroke-1' />
              </div>
              Ajouter
            </div>
          }
          title='Add a player'
          description='Add a new player to your team.'
          close={<button className='hidden'>Fermer</button>}
        >
          <PlayerForm handleAfterSubmit={setOpen} />
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
}: ComponentProps<'form'> & {
  handleAfterSubmit: (open: boolean) => void;
}) {
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
      handleAfterSubmit(false);
    } catch (err: any) {
      setError('name', { message: err.message });
    }
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
              message: 'Only 10 chars are enabled.',
            },
            required: {
              value: true,
              message: 'This field is required!',
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='description'>Bio</Label>
        <Input
          id='description'
          placeholder='Mk46'
          {...register('description')}
        />
      </div>
      <Button type='submit'>Ajouter</Button>
    </form>
  );
}

import { PropsWithChildren, useState } from 'react';
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

export const PlayersSection = () => {
  const { players } = usePlayers();
  const [add, setAdd] = useState(false);

  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className=''>Action</h1>
      <div className='flex h-64 gap-4 overflow-x-scroll'>
        {[...players.reverse()].map((player) => (
          <PlayerAvatar player={player} key={player.id} />
        ))}
      </div>
      <DrawerDialog
        open={add}
        trigger={<Link href='/?action=create'>Add</Link>}
        title='Ajouter un joueur'
        description='Ajouter un nouveau joueur à votre team.'
        close={'Fermer'}
      >
        <PlayerForm handleAfterSubmit={() => setAdd(false)} />
      </DrawerDialog>
    </div>
  );
};

function PlayerForm({
  className,
  handleAfterSubmit,
}: React.ComponentProps<'form'> & { handleAfterSubmit: () => void }) {
  const { add } = usePlayers();
  const { register, handleSubmit } = useForm<Player>();

  const handleAdd: SubmitHandler<Player> = (data) => {
    add(data);
    handleAfterSubmit();
  };
  return (
    <form
      className={cn('grid items-start gap-4 p-4', className)}
      onSubmit={handleSubmit(handleAdd)}
    >
      <div className='grid gap-2'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' {...register('name')} />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' defaultValue='@shadcn' />
      </div>
      <Button type='submit'>Save changes</Button>
    </form>
  );
}

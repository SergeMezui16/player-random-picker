import { Avatar, AvatarFallback, AvatarImage, Button } from '../ui';
import { createAvatar } from '@dicebear/core';
import { lorelei, adventurerNeutral } from '@dicebear/collection';
import { Player } from '@/schema/player';
import { DrawerDialog } from '../molecule';
import { EditIcon, Trash2Icon } from 'lucide-react';
import { usePlayers } from '@/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cn } from '@/lib/cn';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type PlayerAvatarType = {
  player: Player;
};

export const PlayerAvatar = ({ player }: PlayerAvatarType) => {
  const avatar = createAvatar(adventurerNeutral, {
    seed: player.name,
    flip: true,
    scale: 120,
  });

  const A = () => (
    <Avatar className='peer flex size-32 items-center justify-center rounded border bg-background transition-all duration-100'>
      <AvatarImage
        className=''
        src={avatar.toDataUriSync()}
        width={200}
        height={200}
        title=''
      />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  );

  return (
    <>
      <DrawerDialog
        open={false}
        trigger={
          <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
            <A />
            <div className=''>{player.name}</div>
          </div>
        }
        close={
          <div className='mt-4 flex items-center justify-center  gap-2'>
            <Button variant='destructive' size='icon'>
              <Trash2Icon />
            </Button>
            <DrawerDialog
              open={false}
              trigger={
                <Button variant='default' size='icon'>
                  <EditIcon />
                </Button>
              }
            >
              <PlayerEditForm handleAfterSubmit={() => {}} player={player} />
            </DrawerDialog>
          </div>
        }
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <A />
          <p>{player.name}</p>
          <p className='text-muted-foreground'>{player.description}</p>
        </div>
        <div className='mt-4 flex items-center justify-center  gap-2'>
          <Button variant='destructive' size='icon'>
            <Trash2Icon />
          </Button>
          <DrawerDialog
            open={false}
            trigger={
              <Button variant='default' size='icon'>
                <EditIcon />
              </Button>
            }
          >
            <PlayerEditForm handleAfterSubmit={() => {}} player={player} />
          </DrawerDialog>
        </div>
      </DrawerDialog>
    </>
  );
};

function PlayerEditForm({
  className,
  handleAfterSubmit,
  player,
}: React.ComponentProps<'form'> & {
  handleAfterSubmit: () => void;
  player: Player;
}) {
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
        <Input type='text' {...register('name')} defaultValue={player.name} />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='description'>Bio</Label>
        <Input
          id='description'
          defaultValue={player.description}
          {...register('description')}
        />
      </div>
      <Button type='submit'>Save changes</Button>
    </form>
  );
}

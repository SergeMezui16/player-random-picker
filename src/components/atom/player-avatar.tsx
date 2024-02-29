import { Avatar, AvatarFallback, AvatarImage, Button, Separator } from '../ui';
import { Player } from '@/schema/player';
import { DrawerDialog } from '../molecule';
import { Trash2Icon } from 'lucide-react';
import { usePlayers } from '@/hooks';
import { PlayerCard } from '.';

type PlayerAvatarType = {
  player: Player;
};

export const PlayerAvatar = ({ player }: PlayerAvatarType) => {
  const { remove } = usePlayers();

  return (
    <>
      <DrawerDialog
        open={false}
        trigger={
          <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
            <PlayerCard player={player} />
          </div>
        }
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <PlayerCard player={player} withDescription />
          <Separator />
          <br />
          <Button
            size='icon'
            variant='destructive'
            onClick={() => remove(player)}
          >
            <Trash2Icon className='stroke-1' />
          </Button>
        </div>
      </DrawerDialog>
    </>
  );
};

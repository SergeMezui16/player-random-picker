import { Avatar, AvatarFallback, AvatarImage, Button } from '../ui';
import { createAvatar } from '@dicebear/core';
import { lorelei, adventurerNeutral } from '@dicebear/collection';
import { Player } from '@/schema/player';
import { DrawerDialog } from '../molecule';

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
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <A />
          <p>{player.name}</p>
          <p className='text-muted-foreground'>{player.description}</p>
        </div>
      </DrawerDialog>
    </>
  );
};
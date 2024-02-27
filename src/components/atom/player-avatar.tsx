import { Avatar, AvatarFallback, AvatarImage } from '../ui';
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

  return (
    <>
      <DrawerDialog
        open={false}
        trigger={
          <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
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
            <div className=''>{player.name.slice(0, 10)}</div>
          </div>
        }
      />
    </>
  );
};

import { Player } from '@/schema/player';
import { Avatar, AvatarFallback, AvatarImage } from '../ui';
import { adventurerNeutral } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';

export const PlayerCard = ({
  player,
  withDescription = false,
}: {
  player: Player;
  withDescription?: boolean;
}) => {
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
        title={player.name}
      />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  );
  return (
    <div className='flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-100 ease-in-out hover:mx-2 hover:scale-110'>
      <A />
      <div className=''>{player.name}</div>
      {withDescription && (
        <p className='text-muted-foreground'>{player.description}</p>
      )}
    </div>
  );
};

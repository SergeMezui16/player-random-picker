import { Avatar, AvatarFallback, AvatarImage } from '../ui';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

export const PlayerAvatar = () => {
  const avatar = createAvatar(lorelei, {
    seed: 'Serge Mezui',
    flip: true,
    scale: 120,
  });

  return (
    <Avatar className='peer flex size-32 items-center justify-center rounded bg-primary shadow shadow-transparent transition-all duration-100 hover:shadow-lg hover:shadow-primary/50'>
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
};

import { PropsWithChildren } from 'react';
import { AvatarCard } from '../molecule';
import Image from 'next/image';
import { Avatar } from '../ui';
import { PlayerAvatar } from '../atom';

export const ActionSection = ({ children }: PropsWithChildren) => {
  return (
    <div className='container mx-auto my-4 flex flex-col gap-3'>
      <h1 className=''>Action</h1>
      <div className='flex gap-4'>
        <PlayerAvatar />
      </div>
    </div>
  );
};

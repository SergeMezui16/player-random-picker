import Image from 'next/image';
import pasker from '@/assets/images/pasker.png';
import { Separator } from '../ui';

export const Footer = () => {
  return (
    <div className='h-1/2 bg-card pb-20'>
      <Separator />
      <div className='container flex flex-col items-center justify-between gap-4 p-10 tablet:flex-row'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <div className='flex items-center gap-2 font-mono'>
          <span>Powered By</span>
          <Image src={pasker} alt='Pasker Logo' className='w-32' />
        </div>
      </div>
    </div>
  );
};

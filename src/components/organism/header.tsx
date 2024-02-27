import { Button, Separator } from '../ui';
import { GitHubIcon, ModeToggle } from '../atom';
import Link from 'next/link';
import { GITHUB_REPO_LINK, PERSONAL_WEBSITE_LINK } from '@/config/constants';
import Image from 'next/image';
import logo from '@/assets/images/logo.jpg';

export const Header = () => {
  return (
    <>
      <div className='container my-2 flex w-full items-center justify-between bg-background'>
        <div className='flex items-center'>
          <h1 className='font-bold'>Logo</h1>
        </div>
        <div className='flex h-full items-center justify-between'>
          <Link href={GITHUB_REPO_LINK} target='_blank'>
            <Button variant='ghost' size='icon'>
              <GitHubIcon className='size-5' />
            </Button>
          </Link>
          <ModeToggle />
          <Link href={PERSONAL_WEBSITE_LINK} target='_blank'>
            <Button variant='ghost' size='icon'>
              <Image
                className='tablet:size-[35px] size-[20px] rounded-full'
                src={logo}
                alt='Logo Serge Mezui'
                width={100}
                height={75}
              />
            </Button>
          </Link>
        </div>
      </div>
      <Separator />
    </>
  );
};

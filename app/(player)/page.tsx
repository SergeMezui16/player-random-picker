'use client';

import {
  PlayersSection,
  Header,
  Footer,
  ActionSection,
} from '@/components/organism';

export default function Home() {
  return (
    <div className='bg-background'>
      <Header />
      <ActionSection />
      <PlayersSection />
      <Footer />
    </div>
  );
}

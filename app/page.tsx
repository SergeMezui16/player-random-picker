'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { usePlayers } from '@/hooks';
import { Player } from '@/schema/player';
import { Button } from '@/components/ui';
import { Header } from '@/components/organism';

export default function Home() {
  const { add, players, remove } = usePlayers();
  const { register, handleSubmit } = useForm<Player>();

  const handleAdd: SubmitHandler<Player> = (data) => {
    add(data);
  };

  return (
    <div className='bg-background'>
      <Header />
      <form className='' onSubmit={handleSubmit(handleAdd)}>
        <input type='text' className='border' {...register('name')} />
        <input type='submit' value='Save' />
      </form>
      <ul className='m-auto my-5'>
        {players.map((player) => {
          return (
            <li key={player.id}>
              {player.name} |{' '}
              <Button
                onClick={() => {
                  remove(player);
                }}
              >
                delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

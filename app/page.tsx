'use client';

import { FormEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePlayers } from '@/hooks';

type Player = {
  name: string;
  id: string;
};

export default function Home() {
  const { add, players, remove } = usePlayers();
  const { register, handleSubmit } = useForm<Player>();

  const handleAdd: SubmitHandler<Player> = (data) => {
    // e.preventDefault();
    console.log(data);

    add(data);
  };

  return (
    <div className='container m-auto flex flex-col'>
      <form className='' onSubmit={handleSubmit(handleAdd)}>
        <input type='text' className='border' {...register('name')} />
        <input type='submit' value='Save' />
      </form>
      <ul className='m-auto my-5'>
        {players.map((player) => {
          return (
            <li key={player.id}>
              {player.name} |{' '}
              <button
                onClick={() => {
                  remove(player);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

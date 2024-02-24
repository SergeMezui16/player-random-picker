'use client';

import { FormEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function Home() {
  const [values, setValues] = useLocalStorage('players', 0);

  const handleSubmit = (e: FormEvent) => {
    console.log(e);
  };

  return (
    <div className='container m-auto flex flex-col'>
      <form className='' onSubmit={handleSubmit}>
        <input type='text' className='border' />
        <input type='button' value='Save' />
      </form>
      <ul className='m-auto my-5'>
        <li>Player 1</li>
        <li>Player 2</li>
        <li>Player 3</li>
      </ul>
    </div>
  );
}

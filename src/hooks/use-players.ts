import { PLAYER_LOCAL_KEY } from '@/configs/constants';
import { Player } from '@/schemas/player';
import { useLocalStorage } from 'usehooks-ts';

export const usePlayers = () => {
  const [players, setPlayers] = useLocalStorage<Player[]>(PLAYER_LOCAL_KEY, []);

  const add = (player: Player) => {
    // generate id
    player.id = Math.random().toString();
    setPlayers([...players, player]);
  };

  const remove = (player: Player) => {
    const newPlayers = [...players].filter((p) => p.id !== player.id);

    setPlayers(newPlayers);
  };

  const findById = (player: Player): Player | null => {
    return [...players].find((p) => p.id === player.id) ?? null;
  };

  return {
    add,
    players,
    remove,
    findById,
  };
};

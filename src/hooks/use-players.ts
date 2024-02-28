import { PLAYER_LOCAL_KEY } from '@/config/constants';
import { Player } from '@/schema/player';
import { useLocalStorage } from 'usehooks-ts';

export const usePlayers = () => {
  const [players, setPlayers] = useLocalStorage<Player[]>(PLAYER_LOCAL_KEY, []);

  const add = (player: Player) => {
    if (players.find((p) => p.name === player.name))
      throw new Error('This player already exist');

    // generate id
    player.id = Math.random().toString();
    player.name = player.name.slice(0, 12);
    player.createdAt = new Date().getTime();
    player.updatedAt = new Date().getTime();

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
    players: players.sort((a, b) => a.updatedAt - b.updatedAt),
    remove,
    findById,
    count: players.length
  };
};
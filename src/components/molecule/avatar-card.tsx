import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui';

type AvatarCardProps = {
  title: string;
  handeClick?: () => void;
};

export const AvatarCard = ({ title, handeClick }: AvatarCardProps) => {
  return (
    <div
      className='rounded bg-yellow-400/80 text-card-foreground cursor-pointer p-4 border'
      onClick={() => {
        if (handeClick) handeClick();
      }}
    >
      {title}
    </div>
  );
};


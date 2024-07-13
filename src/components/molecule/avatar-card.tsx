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
      className='cursor-pointer rounded border bg-yellow-400/80 p-4 text-card-foreground'
      onClick={() => {
        if (handeClick) handeClick();
      }}
    >
      {title}
    </div>
  );
};


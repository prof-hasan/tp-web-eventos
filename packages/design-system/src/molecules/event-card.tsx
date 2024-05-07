import { cn } from '../utils';

interface EventCardPros {
  title: string;
  description: string;
  imgSrc?: string;
}

export const EventCard: React.FC<EventCardPros> = ({ title, description, imgSrc }) => {
  return (
    <>
      <div className={cn('flex flex-col gap-2')}>
        {imgSrc && (
          <img src={imgSrc} alt={title} className={cn('h-48 w-full object-cover')} />
        )}
        <h2 className={cn('text-xl font-bold')}>{title}</h2>
        <p className={cn('text-sm')}>{description}</p>
      </div>
    </>
  );
};

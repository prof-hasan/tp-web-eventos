import { cn } from '../utils';

type ImageProps = React.ComponentProps<'img'> & {
  alt: string;
  className?: string;
};

export const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <img
      data-testid='image'
      className={cn(className)}
      {...props}
    />
  );
};

import Image from 'next/image';
import { cn } from '../utils';


type ImageProps = React.ComponentProps<typeof Image> & {
  alt: string;
  className?: string;
};

export const BaseImage: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <Image
      aria-label='Image'
      className={cn(className)}
      data-testid='image'
      width={150}
      height={150}
      {...props}
    />
  );
};

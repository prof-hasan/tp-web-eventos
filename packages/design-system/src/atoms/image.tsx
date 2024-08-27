import * as BaseImage from 'next/image';
import { cn } from '../utils';

type ImageProps = React.ComponentProps<typeof BaseImage.default> & {
  alt: string;
  className?: string;
};

export const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <BaseImage.default
      aria-label='Image'
      className={cn(className)}
      data-testid='image'
      width={props.width ?? 150}
      height={props.height ?? 150}
      {...props}
    />
  );
};

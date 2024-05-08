import { cn } from "../utils";

interface ImageProps extends React.ComponentProps<'img'> {
  className?: string
}

export const Image: React.FC<ImageProps> = ({ children, className, ...props }) => {
  return <img className={cn(className)} {...props} />;
};

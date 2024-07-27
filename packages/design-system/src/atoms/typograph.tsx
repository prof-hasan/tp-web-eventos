import { cn } from '../utils';

type TypographProps = React.ComponentProps<'div'> & {
  className?: string;
  children?: React.ReactNode;
  variant?: 'h2' | 'h3' | 'h4' | 'em' | 'i' | 'p';
};

const baseTitleStyle = ({ variant }: TypographProps) => {
  return cn(`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm`, {
    'text-4xl': variant === 'h2',
    'font-bold text-xl text-blue-800 uppercase': variant === 'h3',
    'font-bold text-lg': variant === 'h4',
    'text-yellow-400': variant === 'em',
    'text-gray-400': variant === 'i',
    '': variant === 'p',
  });
};

export const Typograph: React.FC<TypographProps> = ({ className = '', children, variant = 'p', ...props }) => {
  const Component = variant;

  return (
    <Component
      className={cn(baseTitleStyle({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

import { cn } from '../utils';

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const baseButtonStyle = ({ variant }: ButtonProps) => {
  return cn(`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm `, {
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600':
      variant === 'primary',
    'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
  });
};

export const Button: React.FC<ButtonProps> = ({ className = '', children, variant = 'primary', type, ...props }) => {
  return (
    <button
      aria-label='Button'
      className={cn(baseButtonStyle({ variant }), className)}
      data-testid='button'
      type={type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

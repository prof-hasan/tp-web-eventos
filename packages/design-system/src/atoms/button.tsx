import { cn } from '../utils';

interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  variantTheme?: 'light' | 'dark';
}

const baseButtonStyle = ({ variant, variantTheme }: ButtonProps) => {
  return cn(`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm`, {
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600':
      variant === 'primary' && variantTheme === 'light',
    'bg-white/10 text-white hover:bg-white/20': variant === 'secondary' && variantTheme === 'light',
    'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500':
      variant === 'primary' && variantTheme === 'dark',
    'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50':
      variant === 'secondary' && variantTheme === 'dark',
  });
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  variant = 'primary',
  variantTheme = 'light',
  type,
  ...props
}) => {
  return (
    <button
      className={cn(baseButtonStyle({ variant, variantTheme }), className)}
      type={type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

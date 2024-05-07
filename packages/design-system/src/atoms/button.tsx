import { cn } from '../utils';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  variantTheme?: 'light' | 'dark';
}

const simpleButtonStyle = {
  light: {
    primary: cn(
      `
        rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600
      `,
    ),
    secondary: cn(
      `
        rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 
        shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
      `,
    ),
  },
  dark: {
    primary: cn(
      `
        rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-500
      `,
    ),
    secondary: cn(`rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20`),
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  variantTheme = 'light',
  ...props
}) => {
  return (
    <button
      className={cn(simpleButtonStyle[variantTheme][variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

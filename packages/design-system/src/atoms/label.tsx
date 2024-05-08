import { cn } from '../utils';

type LabelProps = React.ComponentProps<'label'> & {
  label: string;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ label = '', className = '' }) => {
  return <label className={cn('block text-sm font-medium leading-6 text-gray-900', className)}>{label}</label>;
};

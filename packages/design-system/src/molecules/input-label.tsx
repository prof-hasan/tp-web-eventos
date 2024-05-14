import { type ComponentProps } from 'react';
import { Input, Label } from '../atoms';
import { cn } from '../utils';

type InputWithLabelProps = ComponentProps<'input'> & {
  className?: string;
  customStyle?: {
    div?: string;
    input?: string;
    label?: string;
  };
  label: string;
};

export const InputLabel: React.FC<InputWithLabelProps> = ({
  className = '',
  customStyle = {
    input: '',
    label: '',
  },
  label,
  ...props
}) => {
  return (
    <div
      data-testid='input-label'
      className={cn(className)}
    >
      <Label
        className={cn(customStyle.label)}
        label={label}
      />
      <Input
        className={cn(customStyle.input)}
        {...props}
      />
    </div>
  );
};

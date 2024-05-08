import { type ComponentProps } from 'react';
import { Input, InputRef as BaseInputRef, Label } from '../atoms';
import { cn } from '../utils';

type InputWithLabelProps = ComponentProps<'input'> & {
  label: string;
  inputRef?: boolean;
  className?: string;
  customStyle?: {
    div?: string;
    input?: string;
    label?: string;
  };
};

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  className = '',
  customStyle = {},
  inputRef = false,
  label,
  ...props
}) => {
  return (
    <div className={cn(className ? className : customStyle.div)}>
      <Label
        className={cn(customStyle.label)}
        label={label}
      />
      {inputRef ? (
        <BaseInputRef
          className={cn(customStyle.input)}
          ref={props.ref}
          {...props}
        />
      ) : (
        <Input
          className={cn(customStyle.input)}
          {...props}
        />
      )}
    </div>
  );
};

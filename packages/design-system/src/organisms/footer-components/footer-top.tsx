import { type ComponentProps } from 'react';
import { EnvelopeClosedIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '../../atoms';
import { InputIcon } from '../../molecules';
import { cn } from '../../utils';

type FooterTopProps = ComponentProps<'input'> & {
  className?: string;
};

export const FooterTop: React.FC<FooterTopProps> = ({ className = '' }) => {
  return (
    <div className={cn('grid grid-cols-2 place-content-between', className)}>
      <SunIcon className='size-8 place-self-center justify-self-start' />
      <div className={cn('flex items-center justify-end')}>
        <InputIcon
          className={cn('w-40 pr-2')}
          icon={<EnvelopeClosedIcon />}
        />
        <Button
          className={cn('w-40')}
          variant='primary'
        >
          Increva-se
        </Button>
      </div>
    </div>
  );
};

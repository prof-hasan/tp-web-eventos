import { MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, Logo } from '../atoms';
import { InputIcon } from '../molecules';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div className={cn('border-b-2 border-slate-200 bg-slate-50 py-2')}>
      <Logo img={<SunIcon className={cn('h-20 w-20')} />} />
      <div className={cn('flex items-center justify-center gap-4', className)}>
        <Button
          className={cn('w-40')}
          variant='primary'
        >
          Criar Evento
        </Button>
        <Select>
          <SelectTrigger
            className={cn('w-40')}
            placeholder='Categorias'
          />
          <SelectContent>
            <SelectItem value='musica'>Música</SelectItem>
            <SelectItem value='cinema'>Cinema</SelectItem>
            <SelectItem value='teatro'>Teatro</SelectItem>
          </SelectContent>
        </Select>
        <InputIcon
          className={cn('w-80')}
          icon={<MagnifyingGlassIcon />}
        />
      </div>
    </div>
  );
};

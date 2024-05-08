import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger } from '../atoms';
import { InputIcon } from '../molecules';

type NavBarProps = {
  className?: string;
  img: ReactNode;
};

export const NavBar: React.FC<NavBarProps> = ({ className = '', img }) => {
  return (
    <nav
      className={cn('border-b-2 border-slate-200 bg-slate-50 py-2', className)}
    >
      <div className={cn('flex justify-center py-2')}>{img}</div>
      <div className={cn('flex items-center justify-center gap-4')}>
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
    </nav>
  );
};
